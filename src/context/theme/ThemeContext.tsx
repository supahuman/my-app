import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// Define the possible themes
type Theme = "light" | "dark";

// Define the shape of the context
type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

// Create the context with an undefined(for a tree not wrapped) default value
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// Provider component to wrap the app and provide theme state
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  // Apply theme to <html data-theme="..."> for CSS variables
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
