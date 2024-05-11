export default class ElmHeader < HTMLElement
  def initialize
    super
    
    init_elm()
  end

  def connected_callback()
  end

  def disconnected_callback()
  end

  def init_elm()
    template = """
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
          <a class='nav-link' href='#galerie'>Galerie</a>
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
    """

    self.innerHTML = template
  end
end