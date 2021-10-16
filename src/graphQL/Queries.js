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
            }`;