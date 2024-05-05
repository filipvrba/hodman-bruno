export default class ElmFooter < HTMLElement
  def initialize
    super
    
    init_elm()
  end

  def init_elm()
    template = """
<footer class='text-center py-4'>
  <div class='container'>
    <p>&copy; 2024 Hodinový Manžel. Všechna práva vyhrazena.</p>
  </div>
</footer>
    """

    self.innerHTML = template
  end
end