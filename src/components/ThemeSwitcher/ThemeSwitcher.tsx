import React from "react";

import MoonIcon from "../../assets/icons/moon.svg";
import MoonDarkIcon from "../../assets/icons/moonDarkMode.svg";

import { Container, IconContainer } from "./styles";

import useThemeStore from "../../stores/themeStore";

const ThemeSwitcher: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <Container>
      <IconContainer
        src={theme === "light" ? MoonIcon : MoonDarkIcon}
        alt="icone de temas"
      />
    </Container>
  );
};

export default ThemeSwitcher;
