import "./packages/template-rjs-0.1.1/elements";
import ElmFooter from "./elements/elm_footer";
window.customElements.define("elm-footer", ElmFooter);
import ElmHeader from "./elements/elm_header";
window.customElements.define("elm-header", ElmHeader);
import ElmContacts from "./elements/elm_contacts";
window.customElements.define("elm-contacts", ElmContacts);
import ElmServices from "./elements/elm_services";
window.customElements.define("elm-services", ElmServices);
import ElmPrices from "./elements/elm_prices";
window.customElements.define("elm-prices", ElmPrices);
import ElmGallery from "./elements/elm_gallery";
window.customElements.define("elm-gallery", ElmGallery);
import ElmGalleryModal from "./elements/elm_gallery_modal";
window.customElements.define("elm-gallery-modal", ElmGalleryModal);
import ElmLazyImage from "./elements/elm_lazy_image";
window.customElements.define("elm-lazy-image", ElmLazyImage);
import ElmGalleryPagination from "./elements/elm_gallery_pagination";

window.customElements.define(
  "elm-gallery-pagination",
  ElmGalleryPagination
)