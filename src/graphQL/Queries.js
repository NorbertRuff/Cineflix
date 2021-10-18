import {gql} from "@apollo/client";

/**
 * query for searching movie details that matches keyword
 * @param keyWord string
 */
export const SEARCH_MOVIES_BY_KEYWORD = gql`
                query SearchMovies($keyWord: String!) {
                searchMovies(query: $keyWord) {
                    id
                    name
                    overview
                    score
                    releaseDate
                    img: poster {
                        medium
                    }
                    genres {
                    ... on Genre{
                            name
                        }
                    }
                }
            }`;
/**
 * query for movie details
 * @param ID movie id
 */
export const GET_MOVIE_DETAILS_BY_ID = gql`
query getMovie($ID: ID!) {
  movie(id: $ID) {
    id
    name
    overview
    score
    releaseDate
    img: poster {
      medium
    }
    backdrop {small}
    backdrop {large}
    cast(limit: 5) {
      id
      person {
        name
        images {small}
      }
      role {
        ... on Cast {
          character
        }
      }
    }
    crew(limit: 5) {
      id
      person {
        name
      }
      role {
        ... on Crew {
          job
          department
        }
      }
    }
  }
}`;
/**
 * query for related movies
 * @param ID movie id
 */
export const GET_SIMILAR_MOVIE_DETAILS_BY_ID = gql`
query getMovie($ID: ID!) {
    movie(id: $ID) {
        id
        name
        overview
        score
        releaseDate
        img: poster {
            medium
        }
        genres {
        ... on Genre{
                name
            }
        }
        similar{
          id
            name
            overview
            score
            releaseDate
            img: poster {
                medium
            }
            genres {
            ... on Genre{
                    name
                }
            }
        }
    }
}`;