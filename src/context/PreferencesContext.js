// PreferencesContext.js
import React from "react";

export const PreferencesContext = React.createContext({
  rtl: "left",
  theme: "light",
  toggleTheme: () => {},
  toggleRTL: () => {}
});
