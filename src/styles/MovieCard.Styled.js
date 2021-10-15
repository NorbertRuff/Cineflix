import styled from "styled-components";

export const SingleElementContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15vw;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: var(--clr-primary-500);
  color: var(--clr-accent);

  h2 {
    font-size: clamp(0.7rem, 2vw, 1rem);
    background-color: var(--clr-primary-300);
    width: 100%;
    text-align: center;
    height: 5vh;
    padding: 10px;
  }

  h3 {
    font-size: clamp(0.7rem, 2vw, 1rem);
    background-color: var(--clr-primary-400);
    text-align: center;
    width: 100%;
    color: var(--clr-tertiary);
  }

  img {
    width: 100%;
  }

  :hover, :focus-within {
    box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 2px,
    rgba(6, 24, 44, 0.65) 0 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0 1px 0 inset;
    transform: translateY(-10px);
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

`;

export const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 5px;
  width: 100%;
  height: 8vh;
  overflow-x: hidden;
  font-size: clamp(0.7rem, 2vw, 1rem);

  div {
    border-radius: 20px;
    border: 1px solid var(--clr-accent);
    padding: 5px;
  }
`;
