const API_KEY = '24154374-c1e84db869e410d68acac2009';

const URL = 'https://pixabay.com/api';

export default class ImagesApiService {
  constructor() {
    this.query = '';
    this.page = 1;
    this.firstArrivedElement = null;
  }
  fetchImages() {

    return fetch(`${URL}/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${API_KEY}`)
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();
        this.firstArrivedElement = hits[0].id;
        return hits;
      });
  }
    
  incrementPage() {
    this.page += 1;
  }

  nullifyPage() {
    this.page = 1;
  }

  getQuery() {
    return this.query;
  }
  setQuery(newQuery) {
    this.query = newQuery;
  }

  getFirstElement() {
    return this.firstArrivedElement;
  }
}