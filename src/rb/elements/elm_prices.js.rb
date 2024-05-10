import 'servicesObj', '../../json/services.json'

export default class ElmPrices < HTMLElement
  def initialize
    super
    
    init_elm()
  end

  def connected_callback()
  end

  def disconnected_callback()
  end

  def init_elm()
    l_services_tr_dom = lambda do
      result = []

      services_obj.services.each do |service|
        service_template = """
<tr>
  <td>#{service.name}</td>
  <td>#{service.price}</td>
</tr>
        """
        result << service_template
      end
      return result.join('')
    end

    template = """
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
          #{l_services_tr_dom()}
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
    """

    self.innerHTML = template
  end
end