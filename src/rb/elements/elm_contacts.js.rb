import "contactsObj", "../../json/contacts.json"

export default class ElmContacts < HTMLElement
  def initialize
    super
    
    init_elm()
  end

  def init_elm()
    template = """
<div class='container mt-5'>
  <div class='row'>
    <div class='col-md-6 mx-auto text-center'>
      <h1 class='text-center mb-4'>Kontaktní údaje</h1>
      <h3>Telefon:<br> <strong>#{contacts_obj.phone}</strong></h3>
      <br>
      <h4>Email:<br> <a class='a-normal' href='mailto:#{contacts_obj.email}'>#{contacts_obj.email}</a></h4>
      
      <br>
      <br>
      <table class='table'>
        <thead>
          <tr>
            <th scope='col'>Název společnosti</th>
            <th scope='col'>Adresa</th>
            <th scope='col'>IČO</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#{contacts_obj.company}</td>
            <td>#{contacts_obj.address.gsub(', ', '<br>')}</td>
            <td>#{contacts_obj.ico}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    """

    self.innerHTML = template
  end
end