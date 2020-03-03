// Main.js

import React from "react";
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme
} from "react-native-paper";
import { I18nManager } from "react-native";
import { Updates } from "expo";
import { useColorScheme } from "react-native-appearance";

import { RootNavigator } from "./RootNavigator";
import { PreferencesContext } from "./context/PreferencesContext";

export const Main = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = React.useState(
    colorScheme === "dark" ? "dark" : "light"
  );
  function toggleTheme() {
    setTheme(theme => (theme === "light" ? "dark" : "light"));
  }
  const [rtl] = React.useState(I18nManager.isRTL);
  const toggleRTL = React.useCallback(() => {
    I18nManager.forceRTL(!rtl);
    Updates.reloadFromCache();
  }, [rtl]);
  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      toggleRTL,
      theme,
      rtl: rtl ? "right" : "left"
    }),
    [rtl, theme, toggleRTL, toggleTheme]
  );
  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider
        theme={
          theme === "light"
            ? {
                ...DefaultTheme,
                colors: { ...DefaultTheme.colors, primary: "#1ba1f2" }
              }
            : {
                ...DarkTheme,
                colors: { ...DarkTheme.colors, primary: "#1ba1f2" }
              }
        }
      >
        <RootNavigator />
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};
