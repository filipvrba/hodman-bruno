import contactsObj from "../../json/contacts.json";

export default class ElmContacts extends HTMLElement {
  constructor() {
    super();
    this.initElm()
  };

  initElm() {
    let template = `${`
<div class='container mt-5'>
  <div class='row'>
    <div class='col-md-6 mx-auto'>
      <h1 class='text-center mb-4'>Kontaktní údaje</h1>
      <p><strong>Název společnosti:</strong> ${contactsObj.company}</p>
      <p><strong>Adresa:</strong><br> ${contactsObj.address.replaceAll(
      ", ",
      "<br>"
    )}</p>
      <p><strong>Telefon:</strong><br> ${contactsObj.phone}</p>
      <p><strong>E-mail:</strong><br> ${contactsObj.email}</p>
    </div>
  </div>
</div>
    `}`;

    return this.innerHTML = template
  }
}