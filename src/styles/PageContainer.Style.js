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
  padding: var(--fs-base);
  background-color: rgba(0, 0, 0, 0.2);
  background-image: url(${(props) => props.backDrop});
  background-repeat: no-repeat;
  background-size: cover;
  grid-area: MainContentArea;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

`;

export const Header = styled.div`
  grid-area: HeaderArea;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-bottom: 1px solid var(--clr-accent);

  span {
    color: var(--clr-accent);
    font-size: 1.5rem;
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-family: var(--ff-body-light);
    border: 4px solid var(--clr-accent);
  }

  h2 {
    margin-left: 1rem;
    padding: 10px;
    color: var(--clr-light);
    font-size: 2rem;
    font-family: var(--ff-body-bold);

  }
`;

export const Footer = styled.div`
  grid-area: FooterArea;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;

`;

export const ErrorMessage = styled.h1`
  text-align: center;
  vertical-align: center;
  color: red;
`;

export const LoadingMessage = styled.h1`
  text-align: center;
  color: var(--clr-primary-100);
  font-size: 2rem;
`;
