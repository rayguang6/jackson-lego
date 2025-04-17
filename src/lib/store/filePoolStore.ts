import { create } from 'zustand';

interface PoolEntry { file: File; objectUrl: string }
interface FilePoolState {
  pool: Record<string, PoolEntry>;
  add: (id: string, file: File) => string;   // returns objectUrl
  getUrl: (id: string) => string | undefined;
  getFile: (id: string) => File | undefined;
}

export const useFilePoolStore = create<FilePoolState>((set, get) => ({
  pool: {},

  add: (id, file) => {
    const objectUrl = URL.createObjectURL(file);
    set((s) => ({ pool: { ...s.pool, [id]: { file, objectUrl } } }));
    return objectUrl;
  },

  getUrl:  (id) => get().pool[id]?.objectUrl,
  getFile: (id) => get().pool[id]?.file,
}));
