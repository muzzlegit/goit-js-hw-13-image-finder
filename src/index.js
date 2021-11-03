// import './sass/main.scss';
import './js/apiService.js';
import ImagesApiService from './js/apiService.js';
import refs from './js/get-refs.js';
import renderImageCard from './js/render-images.js';
 
const imagesApi = new ImagesApiService();

refs.formInput.addEventListener('submit', onInput);

function onInput(e) {
    e.preventDefault();
    imagesApi.query = e.currentTarget.elements.query.value;
    imagesApi.fetchImages().then(renderImageCard);
    console.log(imagesApi.fetchImages());
}

