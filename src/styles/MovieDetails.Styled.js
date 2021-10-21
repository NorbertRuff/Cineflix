import styled from "styled-components";

/**
 * Flex container that contains main movie details card and mini cards.
 * @type {StyledComponent}
 */
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

/**
 * Flex container that contains cast and crew on main card
 * @type {StyledComponent}
 */
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
/**
 * Contains all movie detials card components.
 * @type {StyledComponent}
 */
export const CardComponentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
