"use strict"

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Скількі  фільмів ви подивились', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Скількі  фільмів ви подивились', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Який останній фільм ви подивились', '').trim();
      const b = prompt('Як ви оцінюєте останній переглянутий фільм', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log('мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('добре');
    } else if (personalMovieDB.count >= 30) {
      console.log('кіноман');
    } else {
      console.log('помилка');
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    } else {
      console.log('DB is privat')
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genres = prompt(`Ваш улюблений жанр під номером ${i}`).trim().toLowerCase();

      if (genres == null || genres == '') {
        console.log('error');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genres;
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Улюбленний жанр ${i + 1} - це ${item}`);
    });
  }
};
