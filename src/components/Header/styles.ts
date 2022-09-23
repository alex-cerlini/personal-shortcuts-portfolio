import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
`;

export const Title = styled.span`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const SubTitle = styled.span`
  margin-top: 0.5rem;
`;
