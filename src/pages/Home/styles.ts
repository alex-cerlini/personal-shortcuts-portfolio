import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
