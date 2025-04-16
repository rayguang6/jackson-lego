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


  