import styled from "styled-components";

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--fs-base);

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;


export const PersonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
