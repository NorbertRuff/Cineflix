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
                        url: custom(size: "w185_and_h278_bestv2")
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
      url: custom(size: "w185_and_h278_bestv2")
    }
    backdrop {small}
    backdrop {large}
    cast(limit: 5) {
      id
      person {
        name
        photo {small}
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