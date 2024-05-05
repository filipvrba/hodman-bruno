export default class ElmHeader extends HTMLElement {
  constructor() {
    super();
    this.initElm()
  };

  connectedCallback() {
    return null
  };

  disconnectedCallback() {
    return null
  };

  initElm() {
    let template = `${`
<nav class='navbar navbar-expand-lg'>
  <div class='container'>
    <a class='navbar-brand' href='#'>Hodinový Manžel</a>
    <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span class='navbar-toggler-icon'></span>
    </button>

    <div class='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul class='navbar-nav ml-auto'>
        <li class='nav-item'>
          <a class='nav-link' href='#o_nas'>O nás</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#sluzby'>Služby</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#ceny'>Ceny</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#kontakt'>Kontakt</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    `}`;
    return this.innerHTML = template
  }
}