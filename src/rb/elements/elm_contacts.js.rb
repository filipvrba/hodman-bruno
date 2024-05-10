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
      <p><strong>Telefon:<br> #{contacts_obj.phone}</strong></p>
      <p><strong>Název společnosti:</strong><br> #{contacts_obj.company}</p>
      <p><strong>Adresa:</strong><br> #{contacts_obj.address.gsub(', ', '<br>')}</p>
      <p><strong>IČO:</strong><br> #{contacts_obj.ico}</p>
    </div>
  </div>
</div>
    """

    self.innerHTML = template
  end
end