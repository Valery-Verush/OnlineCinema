import { MOVIES } from "../MOCK/movies";

class MovieService {
    getAllMovies() {
        return Promice.resolve({data: MOVIES})
    }
}

export const movieService = new MovieService()