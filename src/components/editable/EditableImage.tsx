'use client';
import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { useDesignStore } from '@/lib/store/designStore';
import { usePathname } from 'next/navigation';
import { useFilePoolStore } from '@/lib/store/filePoolStore';

interface ImgProps {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

export const EditableImage = ({
  sectionId, contentPath, defaultSrc, alt,
  width, height, className = '', objectFit = 'cover',
}: {
  sectionId: string;
  contentPath: string;
  defaultSrc: string;
  alt: string;
  width: number | string;
  height: number | string;
  className?: string;
  objectFit?: string;
}) => {
  const update = useDesignStore((s) => s.updateSectionField);
  const section = useDesignStore((s) => s.design.sections.find((x) => x.id === sectionId));
  const { add, getUrl, getBase64 } = useFilePoolStore();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const isEditable = Boolean(sectionId) && pathname === '/';
  const isPreview = pathname === '/preview';
  const raw = section?.content?.[contentPath] as string | undefined;
  const [base64Data, setBase64Data] = useState<string | null>(null);

  // For preview page, convert temp:// URLs to base64
  useEffect(() => {
    if (isPreview && raw?.startsWith('temp://')) {
      const id = raw.slice(7);
      const loadBase64 = async () => {
        try {
          const data = await getBase64(id);
          if (data) {
            setBase64Data(data);
          }
        } catch (err) {
          console.error('Failed to load image data:', err);
        }
      };
      loadBase64();
    }
  }, [isPreview, raw, getBase64]);

  // Custom image component that handles both regular and blob URLs
  const Img = (p: ImgProps) => {
    const src = p.src as string;
    const isBlob = src?.startsWith('blob:') || src?.startsWith('data:');
    const isSSR = typeof window === 'undefined';
    
    // For blob URLs or SSR, use a regular img tag
    if (isSSR || isBlob) {
      return <img {...p} />;
    }
    
    // For regular URLs, use Next.js Image component with proper type conversion
    return (
      <Image 
        src={src}
        alt={p.alt}
        width={typeof p.width === 'string' ? parseInt(p.width, 10) : p.width}
        height={typeof p.height === 'string' ? parseInt(p.height, 10) : p.height}
        className={p.className}
        style={p.style}
        onClick={p.onClick}
        onError={p.onError}
        unoptimized
      />
    );
  };

  /* decide src */
  const { poolMiss, src } = useMemo(() => {
    // For preview page, use base64 data if available
    if (isPreview && base64Data) {
      return { poolMiss: false, src: base64Data };
    }
    
    if (!raw) return { poolMiss: false, src: defaultSrc };
    if (!raw.startsWith('temp://')) return { poolMiss: false, src: raw };
    
    const url = getUrl(raw.slice(7));
    return { poolMiss: !url, src: url ?? defaultSrc };
  }, [raw, getUrl, defaultSrc, isPreview, base64Data]);

  /* clean dead handle */
  useEffect(() => {
    if (poolMiss && sectionId) update(sectionId, contentPath, defaultSrc);
  }, [poolMiss, sectionId, contentPath, defaultSrc, update]);

  /* pick image */
  const pick = () => {
    if (!isEditable || loading || !sectionId) return;
    const input = document.createElement('input');
    input.type = 'file'; input.accept = 'image/*';
    input.onchange = () => {
      const file = input.files?.[0]; if (!file) return;
      setLoading(true);
      const id = crypto.randomUUID();
      add(id, file);                                   // instant pool add
      update(sectionId, contentPath, `temp://${id}`);  // write handle
      setLoading(false);
    };
    input.click();
  };

  return (
    <div className={`relative group ${isEditable ? 'outline outline-blue-200 rounded' : ''}`} style={{ width, height }}>
      {loading ? (
        <div className="flex items-center justify-center bg-gray-100 w-full h-full rounded">
          <div className="animate-spin h-6 w-6 border-t-2 border-b-2 border-primary rounded-full" />
        </div>
      ) : (
        <Img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${isEditable ? 'cursor-pointer' : ''} rounded`}
          style={{ objectFit: objectFit as 'cover' | 'contain' | 'fill' | undefined }}
          onClick={pick}
          onError={(e) => ((e.target as HTMLImageElement).src = defaultSrc)}
        />
      )}

      {isEditable && !loading && (
        <button
          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition rounded"
          onClick={pick}
        >
          <span className="bg-white text-black px-3 py-1 rounded shadow">Click to change</span>
        </button>
      )}
    </div>
  );
};
