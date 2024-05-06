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
    <div class='col-md-6 mx-auto'>
      <h1 class='text-center mb-4'>Kontaktní údaje</h1>
      <p><strong>Název společnosti:</strong> #{contacts_obj.company}</p>
      <p><strong>Adresa:</strong><br> #{contacts_obj.address.gsub(', ', '<br>')}</p>
      <p><strong>Telefon:</strong><br> #{contacts_obj.phone}</p>
      <p><strong>E-mail:</strong><br> #{contacts_obj.email}</p>
    </div>
  </div>
</div>
    """

    self.innerHTML = template
  end
end