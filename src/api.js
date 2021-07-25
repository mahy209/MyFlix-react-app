import axios from "axios";

const api_key = "b9a8cdc2048ddaefc9a94f23d76d46a1";
const language = "en-US";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/"
});

// this is an object
export const moviesApi = {
	nowPlaying: () =>
		api.get("movie/now_playing", {
			params: {
				api_key: api_key,
				language: language
			}
		}),
	upcoming: () =>
		api.get("movie/upcoming", {
			params: {
				api_key: api_key,
				language: language
			}
		}),
	popular: () =>
		api.get("movie/popular", {
			params: {
				api_key: api_key,
				language: language
			}
		}),
	movieDetail: id =>
		api.get(`movie/${id}`, {
			params: {
				api_key: api_key,
				language: language,
				append_to_response: "videos"
			}
		}),
	search: term =>
		api.get("search/movie", {
			params: {
				api_key: api_key,
				language: language,
				query: encodeURIComponent(term)
			}
		})
};

export const tvApi = {
	topRated: () =>
		api.get("tv/top_rated", {
			params: {
				api_key: api_key,
				language: language
			}
		}),
	popular: () =>
		api.get("tv/popular", {
			params: {
				api_key: api_key,
				language: language
			}
		}),
	airingToday: () =>
		api.get("tv/airing_today", {
			params: {
				api_key: api_key,
				language: language
			}
		}),
	showDetail: id =>
		api.get(`tv/${id}`, {
			params: {
				api_key: api_key,
				language: language,
				append_to_response: "videos"
			}
		}),
	search: term =>
		api.get("search/tv", {
			params: {
				api_key: api_key,
				language: language,
				query: encodeURIComponent(term)
			}
		})
};

export default api;
