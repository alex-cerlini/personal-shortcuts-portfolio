import React from "react";

import MoonIcon from "../../assets/icons/moon.svg";

import { Container, IconContainer } from "./styles";

const ThemeSwitcher: React.FC = () => {
  return (
    <Container>
      <IconContainer src={MoonIcon} alt="icone de temas" />
    </Container>
  );
};

export default ThemeSwitcher;
