import ProfilePicture from "../../components/ProfilePicture";
import React from "react";

import { Container } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";

import LinkedinIcon from "../../assets/icons/linkedin.svg";
import GithubIcon from "../../assets/icons/github.svg";
import EmailIcon from "../../assets/icons/email.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";

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
        title="LINKEDIN"
        url="https://www.linkedin.com/in/alex-cerlini/"
      />

      <Button
        icon={GithubIcon}
        title="GITHUB"
        url="https://github.com/alex-cerlini"
      />

      <Button
        icon={EmailIcon}
        title="contato@alexcerlini.com.br"
        url="mailto:contato@alexcerlini.com.br"
      />

      <Button
        icon={TwitterIcon}
        title="TWITTER"
        url="https://twitter.com/alexcerlini"
      />

      <Button
        icon={FacebookIcon}
        title="FACEBOOK"
        url="https://www.facebook.com/alexcerlini/"
      />
    </Container>
  );
};

export default Home;
