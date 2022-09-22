import styled from "styled-components";

export const AnchorStyled = styled.a`
  margin-top: 1.3rem;
`;

export const Container = styled.div`
  width: 40vw;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 12px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 80vw;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    transition: 600ms;
  }
`;

export const TitleStyled = styled.span`
  font-size: 14px;
`;

export const IconContainer = styled.div`
  width: 20px;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgIcon = styled.img`
  height: 90%;
`;

export const VoidContainer = styled.div`
  width: 20px;
`;
