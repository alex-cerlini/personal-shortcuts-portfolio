import React from "react";

import MoonIcon from "../../assets/icons/moon.svg";
import MoonDarkIcon from "../../assets/icons/moonDarkMode.svg";

import { Container, IconContainer } from "./styles";

import useThemeStore from "../../stores/themeStore";

const ThemeSwitcher: React.FC = () => {
  const lightTheme = useThemeStore((state) => state.lightTheme);
  return (
    <Container>
      <IconContainer
        src={lightTheme ? MoonIcon : MoonDarkIcon}
        alt="icone de temas"
      />
    </Container>
  );
};

export default ThemeSwitcher;
