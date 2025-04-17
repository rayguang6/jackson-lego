'use client';
import React, { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import { useDesignStore } from '@/lib/store/designStore';
import { usePathname } from 'next/navigation';
import { useFilePoolStore } from '@/lib/store/filePoolStore';
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
  const { add, getUrl } = useFilePoolStore();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const isEditable = Boolean(sectionId) && pathname === '/';
  const raw = section?.content?.[contentPath] as string | undefined;

  const Img = (p) => {
    const src = p.src as string;
    const isBlob = src?.startsWith('blob:') || src?.startsWith('data:');
    const isSSR  = typeof window === 'undefined';
    return isSSR || isBlob ? <img {...p} /> : <Image {...p} unoptimized />;
  };

  /* decide src */
  const { poolMiss, src } = useMemo(() => {
    if (!raw) return { poolMiss: false, src: defaultSrc };
    if (!raw.startsWith('temp://')) return { poolMiss: false, src: raw };
    const url = getUrl(raw.slice(7));
    return { poolMiss: !url, src: url ?? defaultSrc };
  }, [raw, getUrl, defaultSrc]);

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
          src={src} alt={alt} width={width} height={height}
          className={`${className} ${isEditable ? 'cursor-pointer' : ''} rounded`}
          style={{ objectFit }} onClick={pick}
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
