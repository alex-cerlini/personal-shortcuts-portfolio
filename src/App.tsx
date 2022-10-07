import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Home from "./pages/Home";
import { useState } from "react";

import useThemeStore from "./stores/themeStore";

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
