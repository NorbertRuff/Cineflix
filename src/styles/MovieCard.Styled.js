import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 260px;
  min-height: 600px;
  transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-color: var(--clr-primary-500);
  color: var(--clr-accent);
  box-shadow: rgba(0, 0, 0, 0.16) 0 10px 10px, rgba(0, 0, 0, 0.23) 0 10px 10px;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(0.7rem, 2vw, 1.2rem);
    background-color: var(--clr-primary-300);
    width: 100%;
    text-align: center;
    height: 8vh;
    padding: 10px;
  }

  h3 {
    font-size: clamp(0.7rem, 2vw, 1rem);
    background-color: var(--clr-tertiary-500);
    text-align: center;
    width: 100%;
    color: var(--clr-light);
  }

  img {
    width: 260px;
    min-height: 400px;
  }

  :hover, :focus-within {
    box-shadow: rgba(6, 24, 44, 0.4) 0 0 0 2px,
    rgba(6, 24, 44, 0.65) 0 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0 1px 0 inset;
    transform: translateY(-10px);
    transition: all .5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

`;

export const RelatedCardWrapper = styled.div`
  display: grid;
  align-items: center;
  background-color: var(--clr-primary-500);
  color: var(--clr-accent);
  box-shadow: rgba(0, 0, 0, 0.16) 0 10px 10px, rgba(0, 0, 0, 0.23) 0 10px 10px;
  max-width: 900px;
  text-align: center;
  margin: 2rem;
  grid-template-columns: auto auto 20% 20%;
  grid-template-rows: 10% 20% 60% 10%;
  grid-template-areas:
    "Thumbnail ReleaseDate . Rating"
    "Thumbnail Title Title Title"
    "Thumbnail OverView OverView OverView"
    "Thumbnail Genres Genres Genres";

  h2 {
    grid-area: Title;
    font-size: clamp(0.7rem, 2vw, 1.2rem);
    background-color: var(--clr-primary-300);
    width: 100%;
    padding: 10px;
  }

  img {
    grid-area: Thumbnail;
    width: 250px;
  }
`;

export const RatingDiv = styled.div`
  text-align: center;
  grid-area: Rating;
`;
export const OverView = styled.div`
  padding: var(--fs-base);
  grid-area: OverView;
  font-size: clamp(0.7rem, 2vw, 1.2rem);
  background-color: var(--clr-accent);
  color: var(--clr-dark);
  height: 100%;
`;

export const RelatedGenresContainer = styled.div`
  background-color: var(--clr-primary-400);
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  grid-area: Genres;
  padding: var(--fs-base);
`;

export const RelatedDate = styled.div`
  grid-area: ReleaseDate;
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
