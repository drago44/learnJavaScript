'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const movieDB = {
    movies: [
      "Логан",
      "Апокалипсис сегодня ",
      "Ла-ла лэнд",
      "Одержимость",
      "Зомбиленд"
    ]
  };

  const adv = document.querySelectorAll('.promo__adv img');
  const poster = document.querySelector('.promo__bg');
  const genre = poster.querySelector('.promo__genre');
  const movieList = document.querySelector('.promo__interactive-list');
  const addForm = document.querySelector('form.add');
  const addInput = addForm.querySelector('.adding__input');
  const checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let newFilm = addInput.value.trim();
    const favorite = checkbox.checked;

    if (newFilm) {

      if (newFilm.length > 21) {
          newFilm = `${newFilm.substring(0, 22)}...`;
        }

      if (favorite) {
        console.log('Favorite')
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }

    e.target.reset();
  })

  const advDelete = (arr) => {
    adv.forEach(item => {
      item.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = 'Драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';
  };

  const sortArr = (arr) => {
    arr.sort();
  }

  function createMovieList(films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
          <div class="delete"></div>
        </li>
      `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  };

  advDelete(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);

})
