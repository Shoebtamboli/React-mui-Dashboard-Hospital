import { create } from 'zustand'

interface ITheme  {
  palette: {
    primary: {
      main: string;
    };
    secondary: {
      main: string;
    };
    mode: "light" | "dark";
  };
  shape: {
      borderRadius: number;
  };
}

interface ThemeStore {
  theme: ITheme;
  toggleMode: () => void;
  setPrimaryColor: (color: string) => void;
  setSecondaryColor: (color: string) => void;
  setBorderRadius: (borderRadius: number) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: {
    palette: {
      primary: {
        main: "#2C5F2D" // Blue color
      },
      secondary: {
        main: "#97BC62"
      },
      mode: "light"
    },
    shape: {
      borderRadius: 12
    }
  },
  toggleMode: () =>
    set((state) => ({
      theme: {
        ...state.theme,
        palette: {
          ...state.theme.palette,
          mode: state.theme.palette.mode === "light" ? "dark" : "light"
        }
      }
    })),
  setPrimaryColor: (color) =>
    set((state) => ({
      theme: {
        ...state.theme,
        palette: {
          ...state.theme.palette,
          primary: {
            main: color
          }
        }
      }
    })),
  setSecondaryColor: (color) =>
    set((state) => ({
      theme: {
        ...state.theme,
        palette: {
          ...state.theme.palette,
          secondary: {
            main: color
          }
        }
      }
    })),
  setBorderRadius: (borderRadius) =>
    set((state) => ({
      theme: {
        ...state.theme,
        shape: {
          borderRadius
        }
      }
    }))
}));
