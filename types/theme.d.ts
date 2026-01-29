
type Theme = 'light' | 'dark'

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: (theme?: Theme) => void;
}