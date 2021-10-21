import styled from "styled-components";

/**
 * Container for searchbar button and Title
 * @type {StyledComponent}
 */
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem;
  min-width: 40vw;
`;
/**
 * Search result wrapper
 * @type {StyledComponent}
 */
export const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--fs-base);
`;