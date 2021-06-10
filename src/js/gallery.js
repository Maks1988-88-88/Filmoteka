import cardTpl from '../templates/card-template.hbs';
import FetchApiFilms from './apiService';

const fetchApiFilms = new FetchApiFilms();

const refs = {
  gallery: document.querySelector('.js-gallery'),
};

//рендер популярных фильмов
function createPopularMoviesGallery() {
  return fetchApiFilms.fetchPopularMovies().then(makeGalleryMarkup); // переписать сatch, выводим ошибку или нотификашку?
}
createPopularMoviesGallery();
//рендер по результату поиска фильмов
function createMoviesGallery() {
  fetchApiFilms
    .fetchSearchMovies()
    .then(movies => {
      if (movies.length === 0) {
        console.log('no matches');
      } else {
        makeGalleryMarkup(movies); 
      }
    })
    .сatch(console.log); // переписать сatch, выводим ошибку или нотификашку?
}

function makeGalleryMarkup(movies) {
  refs.gallery.insertAdjacentHTML('beforeend', cardTpl(movies));
}

function clearGalleryMarkup() {
  refs.gallery.innerHTML = '';
}
