import { createContext, useState } from 'react';

export const ColorThemeContext = createContext();

export function ColorThemeProvider({ children }) {
  const [ colorTheme, setColorTheme ] = useState(null);

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}