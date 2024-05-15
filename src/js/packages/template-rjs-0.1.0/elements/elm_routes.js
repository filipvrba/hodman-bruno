export default class ElmRoutes extends HTMLElement {
  constructor() {
    super();

    this._lHashchange = () => {
      return this.changePage()
    };

    this.changePage()
  };

  connectedCallback() {
    return window.addEventListener("hashchange", this._lHashchange)
  };

  disconnectedCallback() {
    return window.removeEventListener("hashchange", this._lHashchange)
  };

  changePage() {
    let currentPage = this.findCurrentPage();
    if (currentPage) return this.initPage(currentPage)
  };

  findCurrentPage() {
    for (let page of ROUTES_JSON.pages) {
      if (page.endpoint !== location.hash.replace("#", "").replaceAll(
        "-",
        "/"
      )) continue;

      return page
    };

    return null
  };

  initPage(page) {
    this.initMeta(page);
    let fileName = page.endpoint.replaceAll("-", "_");

    return Net.curl(
      `./html/${fileName}.html`,
      content => this.initElm(content, page)
    )
  };

  initElm(content, page=null) {
    let template = `${`\n    ${page ? content.replace(
      "TITLE",
      page.title
    ) : null}\n    `}`;

    return this.innerHTML = template
  };

  initMeta(page) {
    let title = `${page.title} | ${TITLE_APP}`;

    // Title
    document.title = title;

    document.querySelector("meta[name=\"title\"]").setAttribute(
      "content",
      title
    );

    document.querySelector("meta[property=\"og:title\"]").setAttribute(
      "content",
      title
    );

    document.querySelector("meta[property=\"twitter:title\"]").setAttribute(
      "content",
      title
    );

    // Description
    document.querySelector("meta[name=\"description\"]").setAttribute(
      "content",
      page.description
    );

    document.querySelector("meta[property=\"og:description\"]").setAttribute(
      "content",
      page.description
    );

    document.querySelector("meta[property=\"twitter:description\"]").setAttribute(
      "content",
      page.description
    );

    // Image
    document.querySelector("meta[property=\"og:image\"]").setAttribute(
      "content",
      page.image
    );

    document.querySelector("meta[property=\"twitter:image\"]").setAttribute(
      "content",
      page.image
    );

    // Url
    document.querySelector("meta[property=\"og:url\"]").setAttribute(
      "content",
      location.href
    );

    return document.querySelector("meta[property=\"twitter:url\"]").setAttribute(
      "content",
      location.href
    )
  }
}