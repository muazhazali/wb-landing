export const theme = {
  colors: {
    primary: {
      50: '#E1F5FE',
      100: '#B3E5FC',
      200: '#81D4FA',
      300: '#4FC3F7',
      400: '#29B6F6',
      500: '#3BC4F2',  // primary blue
      600: '#039BE5',
      700: '#0288D1',
      800: '#0277BD',
      900: '#01579B',
    },
    secondary: {
      50: '#EDE7F6',
      100: '#D1C4E9',
      200: '#B39DDB',
      300: '#9575CD',
      400: '#7E57C2',
      500: '#7A69F9',  // secondary purple
      600: '#5E35B1',
      700: '#512DA8',
      800: '#4527A0',
      900: '#311B92',
    },
    accent: {
      50: '#FCE4EC',
      100: '#F8BBD0',
      200: '#F48FB1',
      300: '#F06292',
      400: '#EC407A',
      500: '#F26378',  // accent coral
      600: '#D81B60',
      700: '#C2185B',
      800: '#AD1457',
      900: '#880E4F',
    },
    gradient: {
      card: {
        from: '#3BC4F2',    // primary blue
        via: '#7A69F9',     // secondary purple
        to: '#F26378',      // accent coral
      },
      progress: {
        from: '#3BC4F2',    // primary blue
        via: '#7A69F9',     // secondary purple
        to: '#F26378',      // accent coral
      }
    },
    text: {
      primary: '#1F2937',    // gray-900
      secondary: '#4B5563',  // gray-600
      light: '#9CA3AF',     // gray-400
      white: '#FFFFFF',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F9FAFB',  // gray-50
      dark: '#111827',      // gray-900
    },
    state: {
      hover: {
        primary: '#0288D1',
        secondary: '#512DA8',
        accent: '#D81B60',
      }
    }
  },
  spacing: {
    card: {
      padding: '1.5rem',
      gap: '2rem',
      borderRadius: '1.25rem',
    }
  },
  animation: {
    spring: {
      progress: {
        stiffness: 200,
        damping: 50,
        restDelta: 0.001,
      }
    }
  }
} as const;

// Type for the theme
export type Theme = typeof theme;

// Utility function to get nested theme values using dot notation
export function getThemeValue(path: string): string {
  return path.split('.').reduce((obj, key) => obj[key], theme as any);
} 