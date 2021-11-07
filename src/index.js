import './sass/main.scss';
import LoadMoreBut from'./js/loadmore-button.js';
import ImagesApiService from './js/apiService.js';
import refs from './js/get-refs.js';
import Gallery from './js/gallery.js';
import { onEmptyQuery, onError } from './js/pnotify.js';
// import { notice} from '@pnotify/core';

const basicLightbox = require('basiclightbox');
const imagesApi = new ImagesApiService();
const loadMoreBut = new LoadMoreBut('.load-more-button');
const gallery = new Gallery();

refs.formInput.addEventListener('submit', onInput);
loadMoreBut.getButtonRef().addEventListener('click', fetchImages)
refs.imagesGallery.addEventListener('click', onGallery);

function onInput(e) {
  e.preventDefault();
  imagesApi.query = e.currentTarget.elements.query.value;  
  if (imagesApi.query === '') {
    return onEmptyQuery();
  }
  loadMoreBut.show();
  gallery.clear();
  imagesApi.nullifyPage();
  fetchImages();
}

function fetchImages() {

  imagesApi.fetchImages()
    .then(res => {
      if (res.total === 0) {
        console.log(res);
        return onError(); 
      }
      console.log(res);
      return res;
    })
    .then(gallery.renderImageCard)
    .then(scroll);
}

function scroll() {
  const element = document.getElementById(imagesApi.getFirstElement());
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

function onGallery(e) {
    if (e.target.nodeName !== 'IMG') {
        return;
  }
  showImg(e.target.dataset.source).show();
}

function showImg(src) {
    const instance = basicLightbox.create(`
    <img class="gallery__img" src="${src}" data-source="{{largeImageURL}}"alt="" />
`);
  return instance;
}
