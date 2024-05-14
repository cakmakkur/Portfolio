import { createContext, useState, useContext } from "react";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollContextProvider = ({ children }) => {
  const [projectsPosition, setProjectsPosition] = useState(0);
  const [resumePosition, setResumePosition] = useState(0);
  const [currentScrollPosition, setCurrentScrollPosition] = useState(0);
  const [newScrollPosition, setNewScrollPosition] = useState();

  const value = {
    currentScrollPosition,
    projectsPosition,
    resumePosition,
    newScrollPosition,
    setCurrentScrollPosition,
    setProjectsPosition,
    setResumePosition,
    setNewScrollPosition,
  };
  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};
