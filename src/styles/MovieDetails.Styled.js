import styled from "styled-components";

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--fs-base);
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;