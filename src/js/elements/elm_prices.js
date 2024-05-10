import servicesObj from "../../json/services.json";

export default class ElmPrices extends HTMLElement {
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
    let lServicesTrDom = () => {
      let result = [];

      for (let service of servicesObj.services) {
        let serviceTemplate = `${`
<tr>
  <td>${service.name}</td>
  <td>${service.price}</td>
</tr>
        `}`;
        result.push(serviceTemplate)
      };

      return result.join("")
    };

    let template = `${`
<div class='container mt-5'>
  <div class='row'>
    <div class='col-md-8 mx-auto'>
      <h1 class='text-center mb-4'>Ceny</h1>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Služba</th>
            <th scope='col'>Cena za hodinu</th>
          </tr>
        </thead>
        <tbody>
          ${lServicesTrDom()}
        </tbody>
      </table>
      <br>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Příplatky</th>
            <th scope='col'>Cena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Doprava mimo Kroměříž</td>
            <td>7 Kč/km (dojedu kamkoliv)</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    `}`;
    return this.innerHTML = template
  }
}