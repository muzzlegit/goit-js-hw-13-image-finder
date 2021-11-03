import imageCardTmp from '../templates/image-card.hbs';
import refs from './get-refs.js';

export default function renderImageCard(image) {
    const imageCardMarkup = imageCardTmp(image);
    refs.imagesGallery.innerHTML = imageCardMarkup;  
  }