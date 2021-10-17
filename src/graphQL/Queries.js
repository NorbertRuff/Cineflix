import {gql} from "@apollo/client";

export const GET_MOVIES = gql`
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
            }`

export const GET_MOVIE_DETAILS = gql`
query getMovie($ID: ID!) {
  movie(id: $ID) {
    id
    name
    overview
    score
    releaseDate
    img: poster {
      large
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