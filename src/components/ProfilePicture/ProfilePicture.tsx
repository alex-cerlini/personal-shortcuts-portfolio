import React from "react";

import ProfilePictureImg from "../../assets/img/profilePicture.png";

import { Container } from "./styles";

const ProfilePicture: React.FC = () => {
  return (
    <Container>
      <img src={ProfilePictureImg} alt="" width={120} />
    </Container>
  );
};

export default ProfilePicture;
