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
      <h4>Email:<br> <a class='a-normal' href='mailto:${contactsObj.email}'>${contactsObj.email}</a></h4>
      
      <br>
      <br>
      <div class='table-responsive'>
        <table class='table table-sm'>
          <thead>
            <tr>
              <th scope='col'>Název společnosti</th>
              <th scope='col'>Adresa</th>
              <th scope='col'>IČO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${contactsObj.company}</td>
              <td>${contactsObj.address.replaceAll(
      ", ",
      "<br>"
    )}</td>
              <td>${contactsObj.ico}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    `}`;

    return this.innerHTML = template
  }
}