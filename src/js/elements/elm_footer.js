export default class ElmFooter extends HTMLElement {
  constructor() {
    super();
    this.initElm()
  };

  initElm() {
    let template = `${`
<footer class='text-center py-4'>
  <div class='container'>
    <p>&copy; 2024 Hodinový Manžel. Všechna práva vyhrazena.</p>
  </div>
</footer>
    `}`;
    return this.innerHTML = template
  }
}