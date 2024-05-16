import { createContext, useState, useContext } from "react";

interface ScrollContextValue {
  currentScrollPosition: number;
  projectsPosition: number;
  resumePosition: number;
  newScrollPosition: number;
  windowWidth: number;
  setCurrentScrollPosition: React.Dispatch<React.SetStateAction<number>>;
  setProjectsPosition: React.Dispatch<React.SetStateAction<number>>;
  setResumePosition: React.Dispatch<React.SetStateAction<number>>;
  setNewScrollPosition: React.Dispatch<React.SetStateAction<number>>
  setWindowWidth: React.Dispatch<React.SetStateAction<number>>
}

const ScrollContext = createContext<ScrollContextValue | undefined>(undefined);

export const useScrollContext = (): ScrollContextValue => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollContextProvider");
  }
  return context;
};
type PropsTypes = {
  children: React.ReactNode
}

export const ScrollContextProvider = ({ children }: PropsTypes) => {
  const [projectsPosition, setProjectsPosition] = useState(0);
  const [resumePosition, setResumePosition] = useState(0);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [newScrollPosition, setNewScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1071)
  // default is wide-screen. breakpoint for mobile is 1070px

  const value: ScrollContextValue = {
    windowWidth,
    currentScrollPosition,
    projectsPosition,
    resumePosition,
    newScrollPosition,
    setWindowWidth,
    setCurrentScrollPosition,
    setProjectsPosition,
    setResumePosition,
    setNewScrollPosition,
  };
  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};
