import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Home from "./pages/Home";
import { useState } from "react";

import useThemeStore from "./stores/themeStore";

const App = () => {
  const lightTheme = useThemeStore((state) => state.lightTheme);
  let temaAtual;

  lightTheme ? (temaAtual = light) : (temaAtual = dark);

  return (
    <ThemeProvider theme={temaAtual}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

export default App;
