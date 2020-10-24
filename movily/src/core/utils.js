import Axios from "axios";

import env from "../env";
import apiRoutes from "./routes";

let movieGenres = [];
let tvGenres = [];

export const MovieGenreById = async (genreId, update=false) => {
    let params = {
        api_key: env.tmdbApiKey
    };

    try {
        if (movieGenres.length === 0 || update) {
            let response = await Axios.get(`${env.tmdbApiBaseUrl}${apiRoutes.genre.movies}`, { params: params });
            movieGenres = response.data.genres;
        }

        let result = movieGenres.filter((genre) => genre.id === genreId);

        if (result.length !== 1)
            return null

        return result[0].name;
    }
    catch (error) {
        return null;
    }
}

export const TvGenreById = async (genreId, update=false) => {
    let params = {
        api_key: env.tmdbApiKey
    };

    try {
        if (tvGenres.length === 0 || update) {
            let response = await Axios.get(`${env.tmdbApiBaseUrl}${apiRoutes.genre.tv}`, { params: params });
            tvGenres = response.data.genres;
        }

        let result = tvGenres.filter((genre) => genre.id === genreId);

        if (result.length !== 1)
            return null

        return result[0].name;
    }
    catch (error) {
        return null;
    }
}
