// utils/interpolateTheme.tsx

import { ThemeProperties, themes } from "../data/styles.data";
import { getContrastingTextColor } from "./colorUtils";

// Configurable theme settings
export const THEME_CONFIG = {
  // Adjust this value to control the color variation range
  // 0.1 = very subtle changes between day/night (10% range)
  // 0.3 = moderate changes (30% range)
  // 0.5 = significant changes (50% range)
  // 1.0 = full range of variation (100% range)
  COLOR_RANGE: .25,
  
  // Center point of the color range (0-1)
  // Higher values make colors overall darker
  BASE_DARKNESS: 0.85
};

/**
 * Interpolates between two colors (in HEX format) with configurable range
 * @param color1 First color (HEX)
 * @param color2 Second color (HEX)
 * @param factor Interpolation factor (0-1)
 * @returns Interpolated color (HEX)
 */
const interpolateColor = (
  color1: string, 
  color2: string, 
  factor: number
): string => {
  // Calculate the adjusted factor based on the configurable range and darkness
  const adjustedFactor = THEME_CONFIG.BASE_DARKNESS + ((factor - 0.5) * THEME_CONFIG.COLOR_RANGE);
  
  const c1 = parseInt(color1.slice(1), 16);
  const c2 = parseInt(color2.slice(1), 16);
  
  const r1 = (c1 >> 16) & 0xff;
  const g1 = (c1 >> 8) & 0xff;
  const b1 = c1 & 0xff;

  const r2 = (c2 >> 16) & 0xff;
  const g2 = (c2 >> 8) & 0xff;
  const b2 = c2 & 0xff;

  const r = Math.round(r1 + (r2 - r1) * adjustedFactor);
  const g = Math.round(g1 + (g2 - g1) * adjustedFactor);
  const b = Math.round(b1 + (b2 - b1) * adjustedFactor);

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

/**
 * Main interpolation function for time of day transitions with reduced contrast
 * @param season Current season string
 * @param factor Time of day factor (0-1)
 * @returns Theme properties with interpolated colors
 */
export const interpolateTimeOfDay = (
  season: string,
  factor: number
): ThemeProperties => {
  const { day, night } = themes[season];
  
  // Using configurable interpolation for all properties
  const backgroundColor = interpolateColor(day.backgroundColor, night.backgroundColor, factor);
  
  // Determine if we need to use white or dark text based on background color
  const primaryColor = getContrastingTextColor(backgroundColor);
  
  return {
    backgroundColor: backgroundColor,
    primaryColor: primaryColor, // Dynamic text color for readability
    accentColor: interpolateColor(day.accentColor, night.accentColor, factor),
    borderColor: interpolateColor(day.borderColor, night.borderColor, factor),
    hoverColor: interpolateColor(day.hoverColor, night.hoverColor, factor),
    shadowColor: interpolateColor(day.shadowColor, night.shadowColor, factor),
    highlightColor: interpolateColor(day.highlightColor, night.highlightColor, factor),
    secondaryBackgroundColor: interpolateColor(day.secondaryBackgroundColor, night.secondaryBackgroundColor, factor)
  };
};