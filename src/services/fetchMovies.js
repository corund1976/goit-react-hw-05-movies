const BASE_URL = 'https://api.themoviedb.org/3';
const config = {
  api_key: '514f1dc407e87d6475b6a4ae7cc15946' 
};

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/get-trending`, config);
}

export function fetchMovies() {
  return fetchWithErrorHandling(`${BASE_URL}/search/search-movies`, config);
}

export function fetchMovieId() {
  return fetchWithErrorHandling(`${BASE_URL}/movies/get-movie-details`, config);
}

export function fetchMovieCasts() {
  return fetchWithErrorHandling(`${BASE_URL}/movies/get-movie-credits`, config);
}

export function fetchMovieReviews() {
  return fetchWithErrorHandling(`${BASE_URL}/movies/get-movie-reviews`, config);
}

// https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
// https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
// https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.
// Ключ API (v3 auth) 514f1dc407e87d6475b6a4ae7cc15946
// Пример API-запроса https://api.themoviedb.org/3/movie/550?api_key=514f1dc407e87d6475b6a4ae7cc15946
