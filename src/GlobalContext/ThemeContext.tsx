import { createContext, useState, useContext, useEffect } from "react";

type ComponentProps = {
  children: React.ReactNode;
};
interface ThemeType {
  type: string;
  background: string;
  backgroundHighlight: string;
  primary: string;
  secondary: string;
  highlight: string;
  text: string;
  menuBtnBgHl: string;
  menuBtnTxHl: string;
  highlightFx: string;
}
export const DarkTheme: ThemeType = {
  type: "dark",
  highlight: "rgb(209, 241, 252)",
  primary: "rgb(151, 119, 37)",
  secondary: "rgb(0, 1, 2)",
  background: "rgb(58, 88, 99)",
  backgroundHighlight: "rgb(65, 99, 112)",
  text: "rgb(150, 187, 200)",
  menuBtnBgHl: "rgb(79, 111, 123)",
  menuBtnTxHl: "rgb(209, 241, 252)",
  highlightFx: "rgb(158, 226, 168)",
};
export const LightTheme: ThemeType = {
  type: "light",
  backgroundHighlight: "rgb(246, 247, 244)",
  background: "rgb(233, 233, 220)",
  primary: "rgb(160, 162, 95)",
  secondary: "rgb(148, 117, 71)",
  highlight: "rgb(98, 78, 49)",
  text: "rgb(123, 124, 98)",
  menuBtnBgHl: "rgb(225, 228, 215)",
  menuBtnTxHl: "rgb(208, 159, 74)",
  highlightFx: "rgb(200, 94, 80)",
};
interface ThemeContextType {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
  toggleTheme: () => void;
}
const defaultThemeValue: ThemeContextType = {
  theme: LightTheme,
  setTheme: () => {},
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeValue);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }: ComponentProps) => {
  const [theme, setTheme] = useState<ThemeType>(LightTheme);

  useEffect(() => {
    const storedThemeType = localStorage.getItem("theme");
    let initialTheme: ThemeType = LightTheme;
    if (storedThemeType) {
      initialTheme =
        JSON.parse(storedThemeType) === "dark" ? DarkTheme : LightTheme;
    }
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme.type);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme.type === "light" ? DarkTheme : LightTheme;
    document.documentElement.setAttribute("data-theme", newTheme.type);
    localStorage.setItem("theme", JSON.stringify(newTheme.type));
    setTheme(newTheme);
    console.log(
      "change theme: " + document.documentElement.getAttribute("data-theme")
    );
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
