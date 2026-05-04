/**
 * Interpolates between two hex color values.
 * @param {string} color1 - Hex code of the first color (e.g., '#ffffff').
 * @param {string} color2 - Hex code of the second color (e.g., '#000000').
 * @param {number} factor - A number between 0 and 1 representing the interpolation factor (0 = color1, 1 = color2).
 * @returns {string} Interpolated hex color.
 */

export const interpolateColor = (color1: string, color2: string, factor: number) => {
    const hex = (x: number) => x.toString(16).padStart(2, '0');
  
    // Parse the hex colors into RGB components
    const parseColor = (color: string) => {
      const c = parseInt(color.slice(1), 16);
      return {
        r: (c >> 16) & 0xff,
        g: (c >> 8) & 0xff,
        b: c & 0xff,
      };
    };
  
    const c1 = parseColor(color1);
    const c2 = parseColor(color2);
  
    // Interpolate between the two colors' RGB components
    const r = Math.round(c1.r + factor * (c2.r - c1.r));
    const g = Math.round(c1.g + factor * (c2.g - c1.g));
    const b = Math.round(c1.b + factor * (c2.b - c1.b));
  
    return `#${hex(r)}${hex(g)}${hex(b)}`;
  };
  

  type TransitionType = 'timeOfDay' | 'season';  
/**
 * Interpolates between two CSS variable sets based on the type (timeOfDay or season).
 * @param {TransitionType} type - 'timeOfDay' or 'season'
 * @param {string} current - The current state (e.g., 'day', 'night', 'winter', etc.).
 * @param {string} next - The next state (e.g., 'night', 'spring', etc.).
 * @param {number} sliderValue - A number between 0 and 1 representing interpolation.
 */
export const interpolateCSSVariables = (type: TransitionType, current: string, next: string, sliderValue: number) => {
    const rootStyles = getComputedStyle(document.documentElement);
  
    // Define prefixes for current and next
    const currentPrefix = `--${current}`;
    const nextPrefix = `--${next}`;
  
    // List of properties to interpolate
    const properties = [
      'background-color',
      'primary-color',
      'accent-color',
      'border-color',
      'hover-color',
      'shadow-color',
      'highlight-color',
      'secondary-background-color'
    ];
  
    // Interpolate and apply each property

  };