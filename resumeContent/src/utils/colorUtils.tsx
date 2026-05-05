export const getLuminance = (color: string) => {
    const rgb = parseInt(color.slice(1), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = rgb & 0xff;
  
    // Calculate relative luminance
    const [rSrgb, gSrgb, bSrgb] = [r, g, b].map((c) => {
      c /= 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
  
    return 0.2126 * rSrgb + 0.7152 * gSrgb + 0.0722 * bSrgb;
  };
  
  export const getContrastingTextColor = (backgroundColor: string) => {
    const luminance = getLuminance(backgroundColor);
    return luminance > 0.5 ? '#000000' : '#FFFFFF';
  };