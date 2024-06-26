import ElmGallery from "./elm_gallery";
import galleryObj from "../../json/gallery.json";

export default class ElmGalleryPagination extends ElmGallery {
  constructor() {
    super();
    this._url = new URL(window.location.href);
    this._urlParams = new URLSearchParams(this._url.search);
    this._pageIndex = this.getPageIndex();
    window.changeGallery = this.changeGallery.bind(this);
    window.scrollGallery = this.scrollGallery.bind(this)
  };

  getPageIndex() {
    let isInRange = (number, min, max) => number >= min && number <= max;
    let index = this._urlParams.get(ElmGalleryPagination.PARAMETER) === null ? 0 : parseInt(this._urlParams.get(ElmGalleryPagination.PARAMETER));
    let minIndex = this._pageIndex * ElmGalleryPagination.MAX_LENGTH;
    let maxIndex = minIndex + ElmGalleryPagination.MAX_LENGTH;

    if (isInRange(index, 0, this.pagesCount)) {
      return index
    } else {
      return 0
    }
  };

  connectedCallback() {
    return super.connectedCallback()
  };

  disconnectedCallback() {
    return null
  };

  changeGallery(pageIndex) {
    this._pageIndex = pageIndex;
    this._urlParams.set(ElmGalleryPagination.PARAMETER, this._pageIndex);
    this._url.search = this._urlParams.toString();
    window.history.pushState({}, "", this._url);
    return this.initElm()
  };

  scrollGallery(isLeft) {
    if (isLeft) {
      if (this._pageIndex - 1 >= 0) return this.changeGallery(this._pageIndex - 1)
    } else if (this._pageIndex + 1 < this.pagesCount) {
      return this.changeGallery(this._pageIndex + 1)
    }
  };

  get pagesCount() {
    return Math.ceil(galleryObj.gallery.length / ElmGalleryPagination.MAX_LENGTH)
  };

  get relevantGallery() {
    let result = {gallery: []};
    let minIndex = this._pageIndex * ElmGalleryPagination.MAX_LENGTH;
    let maxIndex = minIndex + ElmGalleryPagination.MAX_LENGTH;

    for (let i = minIndex; i < maxIndex; i++) {
      if (i < galleryObj.gallery.length) {
        result.gallery.push(galleryObj.gallery[i])
      } else {
        break
      }
    };

    return result
  };

  initElm() {
    return super.initElm()
  };

  subinitElm() {
    let lBtnNumbers = () => {
      let length = this.pagesCount;
      let startIndex = this._pageIndex - 1;
      let endIndex = this._pageIndex + 1;

      if (startIndex < 0) {
        startIndex++;
        endIndex++
      } else if (endIndex >= length) {
        startIndex--;
        endIndex--
      };

      let result = [];

      for (let i = startIndex; i <= endIndex; i++) {
        let isActive = i === this._pageIndex ? "active" : "";
        let template = `${`
<li class='page-item'>
  <button class='page-link ${isActive}' onclick='changeGallery(${i})'>${i + 1}</button>
</li>
        `}`;
        result.push(template)
      };

      return result.join("")
    };

    return `${`
${super.subinitElm()}
<nav aria-label='Page navigation example'>
  <ul class='pagination justify-content-center'>
    <li class='page-item'>
      <button class='page-link' onclick='scrollGallery(true)'>Předchozí</button>
    </li>
    ${lBtnNumbers()}
    <li class='page-item'>
      <button class='page-link' onclick='scrollGallery(false)'>Další</button>
    </li>
  </ul>
</nav>
    `}`
  }
};

ElmGalleryPagination.MAX_LENGTH = 6;
ElmGalleryPagination.PARAMETER = "gallery-index"