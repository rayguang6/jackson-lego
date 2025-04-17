// Create this once in src/components/StyleProvider.tsx
'use client'
import { useLayoutEffect } from 'react'
import { useDesignStore } from '@/lib/store/designStore'

export default function StyleProvider({ children }: { children: React.ReactNode }) {
  const { primaryColor, secondaryColor, headingFont, bodyFont } =
    useDesignStore((s) => s.design.styleGuide)

  useLayoutEffect(() => {
    const r = document.documentElement.style
    r.setProperty('--primary-color', primaryColor)
    r.setProperty('--secondary-color', secondaryColor)
    r.setProperty('--heading-font', headingFont)
    r.setProperty('--body-font', bodyFont)
  }, [primaryColor, secondaryColor, headingFont, bodyFont])

  return <>{children}</>
}
