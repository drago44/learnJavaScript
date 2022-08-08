const numberOfFilms = +prompt('Скількі  фільмів ви подивились', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

const a = prompt('Який останній фільм ви подивились', '');
const b = prompt('Як ви оцінюєте останній переглянутий фільм', '');
const c = prompt('Який останній фільм ви подивились', '');
const d = prompt('Як ви оцінюєте останній переглянутий фільм', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);