export interface ThemeProperties {
  backgroundColor: string;
  primaryColor: string;
  accentColor: string;
  borderColor: string;
  hoverColor: string;
  shadowColor: string;
  highlightColor: string;
  secondaryBackgroundColor: string;
}

export interface SeasonalTheme {
  day: ThemeProperties;
  night: ThemeProperties;
}

export const workTheme: ThemeProperties = {
  backgroundColor: "#f5f5f5",      // Light background for contrast
  primaryColor: "#333333",         // Darker text for contrast
  accentColor: "#6b0f1a",          // Accent color used prominently
  borderColor: "#6b0f1a",          // Accent border for important elements
  hoverColor: "#6b0f1a",           // Hover color matches the accent
  shadowColor: "rgba(0, 0, 0, 0.1)", // Soft shadows for depth
  highlightColor: "#6b0f1a",       // Accent color for highlights
  secondaryBackgroundColor: "#e0e0e0" // Muted secondary background
};

export const themes: Record<string, SeasonalTheme> = {
  autumn: {
    day: {
      backgroundColor: "#e8c9a9",     // Warm autumn background
      primaryColor: "#4e3629",        // Dark brown text for contrast
      accentColor: "#e67e22",         // Orange accent
      borderColor: "#d35400",         // Darker orange
      hoverColor: "#f39c12",          // Golden hover
      shadowColor: "rgba(211, 84, 0, 0.4)",
      highlightColor: "#e67e22",
      secondaryBackgroundColor: "#dbc1a2"
    },
    night: {
      backgroundColor: "#5d4c3c",     // Darker autumn night
      primaryColor: "#f5eee5",        // Light text for contrast
      accentColor: "#dd6b20",         // Warm orange accent
      borderColor: "#ba4a00",         // Darker border
      hoverColor: "#dd6b20",
      shadowColor: "rgba(221, 107, 32, 0.4)",
      highlightColor: "#dd6b20",
      secondaryBackgroundColor: "#4d3d2d" 
    }
  },
  
  winter: {
    day: {
      backgroundColor: "#e3f2fd",     // Light icy blue
      primaryColor: "#102a43",        // Dark navy text
      accentColor: "#4299e1",         // Bright blue accent
      borderColor: "#2b6cb0",         // Darker blue
      hoverColor: "#63b3ed",          // Light blue hover
      shadowColor: "rgba(56, 189, 248, 0.4)",
      highlightColor: "#4299e1",
      secondaryBackgroundColor: "#d5e8f9"
    },
    night: {
      backgroundColor: "#2a4365",     // Dark blue night
      primaryColor: "#e3f8ff",        // Light icy text
      accentColor: "#3182ce",         // Bright blue accent
      borderColor: "#1e429f",         // Darker blue border
      hoverColor: "#3182ce",
      shadowColor: "rgba(49, 130, 206, 0.4)",
      highlightColor: "#3182ce",
      secondaryBackgroundColor: "#1a365d"
    }
  },
  
  spring: {
    day: {
      backgroundColor: "#ebf5e9",     // Light fresh green
      primaryColor: "#22543d",        // Dark green text
      accentColor: "#48bb78",         // Vibrant green
      borderColor: "#38a169",         // Medium green
      hoverColor: "#68d391",          // Light green hover
      shadowColor: "rgba(72, 187, 120, 0.4)",
      highlightColor: "#48bb78",
      secondaryBackgroundColor: "#deeddb"
    },
    night: {
      backgroundColor: "#2f4c3c",     // Dark forest green
      primaryColor: "#e9fcef",        // Light mint text
      accentColor: "#38a169",         // Medium green accent
      borderColor: "#276749",         // Dark green border
      hoverColor: "#38a169",
      shadowColor: "rgba(56, 161, 105, 0.4)",
      highlightColor: "#38a169",
      secondaryBackgroundColor: "#1f3d2d"
    }
  },
  
  summer: {
    day: {
      backgroundColor: "#fff9db",     // Warm light yellow
      primaryColor: "#744210",        // Dark brown text
      accentColor: "#f6e05e",         // Bright yellow
      borderColor: "#d69e2e",         // Gold
      hoverColor: "#faf089",          // Light yellow hover
      shadowColor: "rgba(246, 224, 94, 0.4)",
      highlightColor: "#f6e05e",
      secondaryBackgroundColor: "#fff0c1"
    },
    night: {
      backgroundColor: "#744210",     // Dark gold/brown
      primaryColor: "#fffff0",        // Light cream text
      accentColor: "#ecc94b",         // Gold accent
      borderColor: "#b7791f",         // Dark gold border
      hoverColor: "#ecc94b",
      shadowColor: "rgba(236, 201, 75, 0.4)",
      highlightColor: "#ecc94b",
      secondaryBackgroundColor: "#5f370d"
    }
  }
};