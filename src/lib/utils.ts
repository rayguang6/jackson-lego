import { SectionType } from "./types";
import { VersionType } from "./types";
import { ThemeType } from "./types";

export function blendWithWhite(hex: string, primaryFactor: number): string {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    // Calculate the blended color
    const blendedR = Math.round(primaryFactor * r + (1 - primaryFactor) * 255);
    const blendedG = Math.round(primaryFactor * g + (1 - primaryFactor) * 255);
    const blendedB = Math.round(primaryFactor * b + (1 - primaryFactor) * 255);
  
    return `rgba(${blendedR}, ${blendedG}, ${blendedB}, 1)`;
  } 


  export function generateTemplateId(
    sectionType: SectionType,
    version: VersionType   = VersionType.v1,
    theme:   ThemeType     = ThemeType.light
  ): string {
    return `${sectionType}-${version}-${theme}`;
  }
  
  export function parseTemplateId(
    templateId: string
  ): { sectionType: SectionType; version: VersionType; theme: ThemeType } | null {
    const parts = templateId.split('-');
    if (parts.length < 3) return null;
    const sectionType = parts.slice(0, -2).join('-') as SectionType;
    const version     = parts[parts.length - 2] as VersionType;
    const themeStr    = parts[parts.length - 1];
    const theme       = themeStr === 'dark' ? ThemeType.dark : ThemeType.light;
    return { sectionType, version, theme };
  }