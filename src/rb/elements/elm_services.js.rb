import 'servicesObj', '../../json/services.json'

export default class ElmServices < HTMLElement
  def initialize
    super
    
    init_elm()
  end

  def connected_callback()
  end

  def disconnected_callback()
  end

  def init_elm()
# <img loading='lazy' src='#{service.picture}' class='card-img-top' alt='...'>
    l_services_dom = lambda do
      result = []

      services_obj.services.each do |service|
        service_template = """
<div class='col-md-6 mb-4'>
  <div class='card'>
    <elm-lazy-image src='#{service.picture}' class='card-img-top' alt='#{service.name}'></elm-lazy-image>
    <div class='card-body'>
      <h5 class='card-title'>#{service.name}</h5>
      <p class='card-text'>#{service.description}</p>
    </div>
  </div>
</div>
        """
        result << service_template
      end
      return result.join('')
    end

    template = """
<div class='container mt-5'>
  <div class='row'>
    <h1 class='text-center mb-4'>Naše služby</h1>
    #{l_services_dom()}
  </div>
</div>
    """

    self.innerHTML = template
  end
end