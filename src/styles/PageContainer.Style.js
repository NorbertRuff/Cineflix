import styled from "styled-components";

export const PageContainerStyle = styled.div`
  display: grid;
  width: 100vw;
  min-height: 100vh;
  grid-template-columns: 5% 90% 5%;
  grid-template-rows: 4rem auto 3rem;
  grid-template-areas:
    "HeaderArea HeaderArea HeaderArea"
    "MainContentArea MainContentArea MainContentArea"
    "FooterArea FooterArea FooterArea";
`;

export const MainContentWrapper = styled.div`
  grid-area: MainContentArea;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
`;

export const Header = styled.div`
  grid-area: HeaderArea;
  display: flex;
  justify-content: center;
  border: 2px solid black;
`;

export const Footer = styled.div`
  grid-area: FooterArea;
  display: flex;
  justify-content: center;
`;

export const ErrorMessage = styled.h1`
  display: flex;
  justify-content: center;
  color: red;
`;
