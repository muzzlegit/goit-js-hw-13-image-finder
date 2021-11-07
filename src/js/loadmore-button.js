export default class LoadMoreButton {

  constructor(selector) {
    this.buttonRef = document.querySelector(selector);
  }

  show(){
    this.buttonRef.classList.remove('is-hidden');
  }
  
  hide() {
    this.buttonRef.classList.add('is-hidden');
  }
  getButtonRef() {
    return this.buttonRef;
  }
}