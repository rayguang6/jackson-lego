// Create this once in src/components/StyleProvider.tsx
'use client'
import { useLayoutEffect } from 'react'
import { useDesignStore } from '@/lib/store/designStore'

export default function StyleProvider({ children }: { children: React.ReactNode }) {
  const { styleGuide } =
    useDesignStore((s) => s.design)

  useLayoutEffect(() => {
    const r = document.documentElement.style
    r.setProperty('--primary-color', styleGuide.primaryColor)
    r.setProperty('--secondary-color', styleGuide.secondaryColor)
    r.setProperty('--heading-font', styleGuide.headingFont)
    r.setProperty('--body-font', styleGuide.bodyFont)
    
  }, [styleGuide])

  return <>{children}</>
}
