import './sass/main.scss';
import LoadMoreBut from'./js/loadmore-button.js';
import ImagesApiService from './js/apiService.js';
import refs from './js/get-refs.js';
import Gallery from './js/gallery.js';
import { notice} from '@pnotify/core';


const basicLightbox = require('basiclightbox');
const imagesApi = new ImagesApiService();
const loadMoreBut = new LoadMoreBut('.load-more-button');
const gallery = new Gallery();

refs.formInput.addEventListener('submit', onInput);
loadMoreBut.getButtonRef().addEventListener('click', fetchImages)

function onInput(e) {
  e.preventDefault();
  imagesApi.query = e.currentTarget.elements.query.value;  
  if (imagesApi.query === '') {
    return notice({
      title: 'WARNING!',
      text: 'Type something',
      hide: true,
      delay: 1000
    });
  }
  loadMoreBut.show();
  gallery.clear();
  imagesApi.nullifyPage();
  fetchImages();
}

function fetchImages() {
  imagesApi.fetchImages()
    .then(gallery.renderImageCard)
    .then(scroll);
}

function scroll() {
  const id = imagesApi.getFirstElement();
  console.log(id);
  const element = document.getElementById(id);
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}



//   const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);