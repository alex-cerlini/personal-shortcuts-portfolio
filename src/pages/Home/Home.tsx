import ProfilePicture from "../../components/ProfilePicture";
import React from "react";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <ProfilePicture />
    </Container>
  );
};

export default Home;
