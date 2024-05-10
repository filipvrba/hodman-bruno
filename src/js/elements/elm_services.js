import servicesObj from "../../json/services.json";

export default class ElmServices extends HTMLElement {
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
    let lServicesDom = () => {
      let result = [];

      for (let service of servicesObj.services) {
        let serviceTemplate = `${`
<div class='col-md-6 mb-4'>
  <div class='card'>
    <img loading='lazy' src='${service.picture}' class='card-img-top' alt='...'>
    <div class='card-body'>
      <h5 class='card-title'>${service.name}</h5>
      <p class='card-text'>${service.description}</p>
    </div>
  </div>
</div>
        `}`;
        result.push(serviceTemplate)
      };

      return result.join("")
    };

    let template = `${`
<div class='container mt-5'>
  <div class='row'>
    <h1 class='text-center mb-4'>Naše služby</h1>
    ${lServicesDom()}
  </div>
</div>
    `}`;
    return this.innerHTML = template
  }
}