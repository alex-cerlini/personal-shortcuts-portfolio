import ProfilePicture from "../../components/ProfilePicture";
import React from "react";

import { Container } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";

import LinkedinIcon from "../../assets/icons/linkedin.svg";

const Home: React.FC = () => {
  return (
    <Container>
      <ProfilePicture />
      <Header
        title="Alexander Andrade Cerlini"
        subtitle="Front-end Developer"
      />
      <Button
        icon={LinkedinIcon}
        title="Linkedin"
        url="https://www.linkedin.com/in/alex-cerlini/"
      />
    </Container>
  );
};

export default Home;
