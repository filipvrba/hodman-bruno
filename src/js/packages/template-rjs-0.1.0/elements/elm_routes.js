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
    document.title = `${page.title} | ${TITLE_APP}`;
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
  }
}