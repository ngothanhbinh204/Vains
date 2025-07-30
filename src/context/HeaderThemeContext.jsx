import { createContext, useContext, useState } from "react";

// Khởi tạo context
const HeaderThemeContext = createContext();

// Hook dùng trong các component
export const useHeaderTheme = () => useContext(HeaderThemeContext);

// Provider
export const HeaderThemeProvider = ({ children }) => {
  const [isLightBackground, setIsLightBackground] = useState(false);

  return (
    <HeaderThemeContext.Provider
      value={{ isLightBackground, setIsLightBackground }}
    >
      {children}
    </HeaderThemeContext.Provider>
  );
};
