import {
  Container,
  IconContainer,
  VoidContainer,
  TitleStyled,
  ImgIcon,
  AnchorStyled,
} from "./styles";

interface Props {
  icon: string;
  title: string;
  url: string;
}

const Button = ({ icon, title, url }: Props) => {
  return (
    <AnchorStyled href={url} style={{ textDecoration: "none", color: "black" }}>
      <Container>
        <IconContainer>
          <ImgIcon src={icon} />
        </IconContainer>
        <TitleStyled>{title}</TitleStyled>
        <VoidContainer></VoidContainer>
      </Container>
    </AnchorStyled>
  );
};

export default Button;
