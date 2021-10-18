const mockResponse = {
    "data": {
        "searchMovies": [
            {
                "id": "550",
                "name": "Fight Club",
                "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
                "score": 8.4,
                "releaseDate": "1999-10-15T00:00:00.000Z",
                "img": {
                    "medium": "https://image.tmdb.org/t/p/w342/a26cQPRhJPX6GbWfQbvZdrrp9j9.jpg",
                    "__typename": "Poster"
                },
                "genres": [
                    {
                        "name": "Drama",
                        "__typename": "Genre"
                    }
                ],
                "__typename": "Movie"
            },
            {
                "id": "345922",
                "name": "Fist Fight",
                "overview": "When one school teacher gets the other fired, he is challenged to an after-school fight.",
                "score": 6.1,
                "releaseDate": "2017-02-16T00:00:00.000Z",
                "img": {
                    "medium": "https://image.tmdb.org/t/p/w342/huRhv4IZDk2ds0DIDkI6uxdmb6J.jpg",
                    "__typename": "Poster"
                },
                "genres": [
                    {
                        "name": "Comedy",
                        "__typename": "Genre"
                    }
                ],
                "__typename": "Movie"
            }
        ]
    }
}


export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}