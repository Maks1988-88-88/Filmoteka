import cardTpl from '../templates/card-template.hbs';
import debounce from 'lodash.debounce';
import fetchApiFilms from './apiService';
import { startSpin, stopSpin } from './spinner';
import { renderInfoMsg, hideInfoImg, renderEmptyGalleryMsg } from './notifications';

const fetchFilms = new fetchApiFilms();

const refs = {
  gallery: document.querySelector('.js-gallery'),
  search: document.querySelector('.header__form-input'),
};

createPopularMoviesGallery();
refs.search.addEventListener('input', debounce(onInputChange, 1000));
refs.search.addEventListener('keydown', preventOnEnterSubmit);

// ----- home ввод в input
function onInputChange(evt) {
  fetchFilms.query = evt.target.value;
  clearGalleryMarkup();

  if (fetchFilms.query) {
    fetchFilms.resetPageNum();
    createSearchMoviesGallery();
  } else {
    createPopularMoviesGallery();
  }
}

// ----- home рендер популярных фильмов
function createPopularMoviesGallery() {
  clearGalleryMarkup();
  hideInfoImg();
  startSpin();

  fetchFilms.fetchPopularMovies().then(makeGalleryMarkup).catch(console.log).finally(stopSpin);
}

// ----- home рендер по результату поиска
function createSearchMoviesGallery() {
  startSpin();
  fetchFilms
    .fetchSearchMovies()
    .then(movies => {
      if (movies.length === 0) {
        renderInfoMsg();
        renderEmptyGalleryMsg('No matches');
      } else {
        makeGalleryMarkup(movies);
      }
    })
    .catch(console.log)
    .finally(stopSpin);
}

// ----- library запрос сoxраненных фильмов
function makeLibraryGallery(id) {
  clearGalleryMarkup();
  hideInfoImg();
  startSpin();

  let filmsList = [];
  fetchFilms
    .fetchFilmByID(id)
    .then(result => {
      filmsList.push(result);
      return filmsList;
    })
    .then(films => {
      makeGalleryMarkup(films);
      document.querySelectorAll('.film-average').forEach(el => el.classList.remove('is-hidden'));
    })
    .catch(console.log)
    .finally(stopSpin);
}

// ----- library рендер сoxраненных фильмов
function renderLibraryGallery(ids) {
  clearGalleryMarkup();
  hideInfoImg(); 
  hidePagination();
  if (ids.length === 0) {
    renderEmptyGalleryMsg('You have no saved movies yet');
  }
  ids.forEach(id => makeLibraryGallery(id));
}

// -----  home library разметка сoздание и чистка
function makeGalleryMarkup(movies) {
  refs.gallery.insertAdjacentHTML('beforeend', cardTpl(movies));
}

function clearGalleryMarkup() {
  refs.gallery.innerHTML = '';
}

// -----  input
function preventOnEnterSubmit(event) {
  if (event.code === 'Enter' || event.keyCode === 13) {
    event.preventDefault();
    return;
  }
}

// ----- pagination прячет в myLib
function hidePagination (){
  const paginationContainer = document.querySelector('.pagination');
  paginationContainer.style.display = 'none';
}


export { fetchFilms, clearGalleryMarkup, createPopularMoviesGallery, renderLibraryGallery };