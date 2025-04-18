import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

interface PoolEntry { file: File; objectUrl: string }
interface SerializedPoolEntry { base64: string; type: string; name: string; objectUrl: string }

interface FilePoolState {
  pool: Record<string, PoolEntry>;
  add: (id: string, file: File) => string;   // returns objectUrl
  getUrl: (id: string) => string | undefined;
  getFile: (id: string) => File | undefined;
  getBase64: (id: string) => Promise<string | undefined>;
}

// Custom persist options with proper types
interface CustomPersistOptions extends PersistOptions<FilePoolState> {
  serialize: (state: FilePoolState) => Promise<string>;
  deserialize: (str: string) => FilePoolState;
}

export const useFilePoolStore = create<FilePoolState>()(
  persist(
    (set, get) => ({
      pool: {},

      add: (id, file) => {
        // Revoke previous URL if it exists
        const existing = get().pool[id]?.objectUrl;
        if (existing && existing.startsWith('blob:')) {
          URL.revokeObjectURL(existing);
        }
        
        const objectUrl = URL.createObjectURL(file);
        set((s) => ({ pool: { ...s.pool, [id]: { file, objectUrl } } }));
        return objectUrl;
      },

      getUrl: (id) => {
        const entry = get().pool[id];
        if (!entry) return undefined;
        
        // If URL is invalid (after page reload), recreate it
        if (entry.objectUrl && entry.objectUrl.startsWith('blob:')) {
          try {
            // Test if the URL is still valid
            fetch(entry.objectUrl, { method: 'HEAD' }).catch(() => {
              // If invalid, recreate it
              const newUrl = URL.createObjectURL(entry.file);
              set((s) => ({
                pool: {
                  ...s.pool,
                  [id]: { ...entry, objectUrl: newUrl }
                }
              }));
              return newUrl;
            });
          } catch (e) {
            // Recreate URL if there's an error
            const newUrl = URL.createObjectURL(entry.file);
            set((s) => ({
              pool: {
                ...s.pool,
                [id]: { ...entry, objectUrl: newUrl }
              }
            }));
            return newUrl;
          }
        }
        
        return entry.objectUrl;
      },
      
      getFile: (id) => get().pool[id]?.file,
      
      // Convert file to base64 for preview pages
      getBase64: async (id) => {
        const file = get().pool[id]?.file;
        if (!file) return undefined;
        
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
          reader.readAsDataURL(file);
        });
      }
    }),
    {
      name: 'jackson-lego-file-pool',
      // Custom serializer/deserializer for File objects
      serialize: (state: FilePoolState): Promise<string> => {
        // We need to convert File objects to base64 for storage
        const serializedPool: Record<string, SerializedPoolEntry> = {};
        
        const promises = Object.entries(state.pool).map(async ([id, entry]) => {
          return new Promise<void>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              serializedPool[id] = {
                base64: reader.result as string,
                type: entry.file.type,
                name: entry.file.name,
                objectUrl: entry.objectUrl
              };
              resolve();
            };
            reader.readAsDataURL(entry.file);
          });
        });
        
        // Return a promise that resolves when all file conversions are done
        return Promise.all(promises).then(() => {
          return JSON.stringify({
            ...state,
            pool: serializedPool
          });
        });
      },
      deserialize: (str: string): FilePoolState => {
        const parsed = JSON.parse(str);
        const deserializedPool: Record<string, PoolEntry> = {};
        
        // Convert base64 back to File objects
        Object.entries(parsed.pool).forEach(([id, serializedEntry]) => {
          const entry = serializedEntry as SerializedPoolEntry;
          if (entry.base64) {
            // Convert base64 to blob
            const byteString = atob(entry.base64.split(',')[1]);
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            
            for (let i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }
            
            const blob = new Blob([ab], { type: entry.type });
            const file = new File([blob], entry.name, { type: entry.type });
            
            // Create a new object URL for the deserialized file
            const objectUrl = URL.createObjectURL(file);
            
            deserializedPool[id] = { file, objectUrl };
          }
        });
        
        return {
          ...parsed,
          pool: deserializedPool
        };
      }
    } as CustomPersistOptions
  )
);
