'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useDesignStore } from '@/lib/store/designStore';
import { usePathname } from 'next/navigation';

interface EditableTextProps {
  sectionId?: string;
  contentPath: string;
  defaultValue: string;
  className?: string;
}

export const EditableText: React.FC<EditableTextProps> = ({
  sectionId,
  contentPath,
  defaultValue,
  className = '',
}) => {
  const updateSectionField = useDesignStore(s => s.updateSectionField);
  const section = useDesignStore(s => s.design.sections.find(s => s.id === sectionId));
  
  const [isEditing, setIsEditing] = useState(false);
  const editorRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();
  
  // Only allow editing in the website builder
  const isWebsiteBuilder = pathname === '/';
  
  // Get value from content or use default, properly handling nested paths
  const getValue = () => {
    if (!section?.content) return defaultValue;
    
    // For simple paths (no nesting), use direct access
    if (!contentPath.includes('.')) {
      return section.content[contentPath] || defaultValue;
    }
    
    // For nested paths, traverse the object
    try {
      const parts = contentPath.split('.');
      let value = section.content;
      
      for (const part of parts) {
        if (value === undefined || value === null) return defaultValue;
        value = value[part];
      }
      
      return value !== undefined && value !== null ? value : defaultValue;
    } catch (error) {
      console.error(`Error accessing nested path ${contentPath}:`, error);
      return defaultValue;
    }
  };
  
  const handleClick = () => {
    if (isWebsiteBuilder && !isEditing) {
      setIsEditing(true);
    }
  };
  
  const handleBlur = () => {
    if (isEditing && editorRef.current) {
      setIsEditing(false);
      const newValue = editorRef.current.innerText;
      if (newValue !== getValue()) {
        // Update the section field using the contentPath
        updateSectionField(sectionId || '', contentPath, newValue);
      }
    }
  };
  
  useEffect(() => {
    if (isEditing && editorRef.current) {
      editorRef.current.focus();
      
      // Place cursor at end
      const range = document.createRange();
      const selection = window.getSelection();
      
      if (editorRef.current.childNodes.length > 0) {
        range.setStartAfter(editorRef.current.childNodes[editorRef.current.childNodes.length - 1]);
      } else {
        range.setStart(editorRef.current, 0);
      }
      
      range.collapse(true);
      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  }, [isEditing]);
  
  // Handle click outside to save
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (editorRef.current && !editorRef.current.contains(e.target as Node)) {
        handleBlur();
      }
    };
    
    if (isEditing) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEditing]);
  
  // If not in website builder, just render the text
  if (!isWebsiteBuilder) {
    return <span className={className}>{getValue()}</span>;
  }
  
  // Add visual cue for editable content in the website builder
  const editableClass = isWebsiteBuilder 
    ? 'hover:ring-2 hover:ring-blue-300 hover:ring-opacity-50 px-1 py-0.5 rounded cursor-text' 
    : '';
  
  return (
    <span
      ref={editorRef}
      className={`${className} ${editableClass} ${isEditing ? 'ring-2 ring-blue-500 outline-none' : ''}`}
      contentEditable={isEditing}
      suppressContentEditableWarning={true}
      onClick={handleClick}
      onBlur={handleBlur}
    >
      {getValue()}
    </span>
  );
}; 