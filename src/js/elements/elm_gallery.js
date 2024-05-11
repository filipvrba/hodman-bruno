import galleryObj from "../../json/gallery.json";

export default class ElmGallery extends HTMLElement {
  constructor() {
    super();
    this.initElm();
    window.galleryClick = this.galleryClick.bind(this)
  };

  galleryClick(index) {
    let card = galleryObj.gallery[index];
    return document.getElementById("modal-image").src = card.picture
  };

  initElm() {
    let lPictureCard = () => {
      let cards = [];

      galleryObj.gallery.forEach((card, i) => {
        let cardTemplate = `${`
<div class='col-md-4 mb-4'>
  <img src='${card.picture}' class='img-fluid btn-img d-block mx-auto' onclick='galleryClick(${i})' style='border-radius: 0.375rem' data-bs-toggle='modal' data-bs-target='#galleryModal'>
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