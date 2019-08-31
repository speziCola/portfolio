import React from 'react'

export const ThemeContext = React.createContext({
  theme: 'theme-light',
  toggleTheme: () => {},
});
