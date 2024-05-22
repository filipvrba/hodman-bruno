import galleryObj from "../../json/gallery.json";

export default class ElmGallery extends HTMLElement {
  constructor() {
    super();
    this._galleryIndexHistory = null;
    this.initElm();
    window.galleryClick = this.galleryClick.bind(this);
    window.modalBtnPrevClick = this.modalBtnPrevClick.bind(this);
    window.modalBtnNextClick = this.modalBtnNextClick.bind(this)
  };

  galleryClick(index) {
    this._galleryIndexHistory = index;
    let card = galleryObj.gallery[index];
    return Events.emit("#app", ENVS.GALLERY_CLICK, card)
  };

  modalBtnPrevClick() {
    let index = this._galleryIndexHistory <= 0 ? (() => {
      return galleryObj.gallery.length - 1
    })() : (() => {
      return this._galleryIndexHistory - 1
    })();

    return this.galleryClick(index)
  };

  modalBtnNextClick() {
    let index = (this._galleryIndexHistory + 1) % galleryObj.gallery.length;
    return this.galleryClick(index)
  };

  initElm() {
    let lPictureCard = () => {
      let cards = [];

      galleryObj.gallery.forEach((card, i) => {
        let cardTemplate = `${`
<div class='col-4 mb-4'>
  <elm-lazy-image src='${card.picture}' class='btn-img d-block mx-auto' onclick='galleryClick(${i})' style='border-radius: 0.375rem' alt='${card.name}' data-bs-toggle='modal' data-bs-target='#galleryModal'></elm-lazy-image>
</div>
        `}`;
        return cards.push(cardTemplate)
      });

      return cards.join("")
    };

    let template = `${`
<div class='container mt-5'>
  <div class='row vertical-center'>
    <h1 class='text-center mb-4'>Galerie</h1>
    ${lPictureCard()}
  </div>
</div>
    `}`;
    return this.innerHTML = template
  }
}