import { createContext, useState, useContext, useEffect } from "react";

type ComponentProps = {
  children: React.ReactNode
}

type LanguageType = 'EN' | 'DE'

interface LanguageContextType {
  language: LanguageType;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
  toggleLanguage: () => void
}

const defaultLanguageValue: LanguageContextType = {
  language: 'EN',
  setLanguage: () => {},
  toggleLanguage: () => {}
};

const LanguageContext = createContext<LanguageContextType>(defaultLanguageValue);

export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageContextProvider = ({ children }: ComponentProps) => {
  const [language, setLanguage] = useState<LanguageType>("EN");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    let initialLanguage: 'EN' | 'DE' = "EN";
    if (storedLanguage) {
      initialLanguage = JSON.parse(storedLanguage) === "EN" ? "EN" : "DE";
    }
    setLanguage(initialLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "DE" : "EN";
    localStorage.setItem("language", JSON.stringify(newLanguage));
    setLanguage(newLanguage);
    console.log("New language is: " + newLanguage);
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
  };
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
