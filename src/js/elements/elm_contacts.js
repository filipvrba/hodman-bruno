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
    <div class='col-md-6 mx-auto text-center'>
      <h1 class='text-center mb-4'>Kontaktní údaje</h1>
      <h3>Telefon:<br> <strong>${contactsObj.phone}</strong></h3>
      <br>
      <p><strong>Název společnosti:</strong><br> ${contactsObj.company}</p>
      <p><strong>Adresa:</strong><br> ${contactsObj.address.replaceAll(
      ", ",
      "<br>"
    )}</p>
      <p><strong>IČO:</strong><br> ${contactsObj.ico}</p>
    </div>
  </div>
</div>
    `}`;

    return this.innerHTML = template
  }
}