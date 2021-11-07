import imageCardTmp from '../templates/image-card.hbs';

export default class Gallery {
  constructor() {
  }
  clear() {
    document.querySelector('.gallery').innerHTML = '';
  }
  renderImageCard(image) {
    document.querySelector('.gallery').insertAdjacentHTML('beforeend', imageCardTmp(image));  
  }

}

