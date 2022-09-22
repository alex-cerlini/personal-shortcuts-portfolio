import ProfilePicture from "../../components/ProfilePicture";
import React from "react";

import { Container } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";

import LinkedinIcon from "../../assets/icons/linkedin.svg";
import GithubIcon from "../../assets/icons/github.svg";

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

      <Button
        icon={GithubIcon}
        title="Github"
        url="https://github.com/alex-cerlini"
      />
    </Container>
  );
};

export default Home;
