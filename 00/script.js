"use strict"

const numberOfFilms = +prompt('Скількі  фільмів ви подивились', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}


for (let i = 0; i < 2; i++){
  const a = prompt('Який останній фільм ви подивились', '');
  const b = prompt('Як ви оцінюєте останній переглянутий фільм', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count < 10){
  console.log('мало');
} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30 ) {
  console.log('добре');
} else if (personalMovieDB.count >= 30){
  console.log('кіноман');
} else {
  console.log('помилка');
}



console.log(personalMovieDB);
