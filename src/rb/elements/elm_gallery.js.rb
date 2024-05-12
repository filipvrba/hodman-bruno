import 'galleryObj', '../../json/gallery.json'

export default class ElmGallery < HTMLElement
  def initialize
    super
    
    init_elm()
    window.gallery_click = gallery_click
  end

  def gallery_click(index)
    card = gallery_obj.gallery[index]
    Events.emit('#app', ENVS::GALLERY_CLICK, card)
  end

  def init_elm()
    l_picture_card = lambda do
      cards = []

      gallery_obj.gallery.each_with_index do |card, i|
        card_template = """
<div class='col-4 mb-4'>
  <img src='#{card.picture}' class='img-fluid btn-img d-block mx-auto' onclick='galleryClick(#{i})' style='border-radius: 0.375rem' data-bs-toggle='modal' data-bs-target='#galleryModal'>
</div>
        """

        cards.push(card_template)
      end

      cards.join('')
    end
    

    template = """
<div class='container mt-5'>
  <div class='row vertical-center'>
    <h1 class='text-center mb-4'>Galerie</h1>
    #{l_picture_card()}
  </div>
</div>
    """

    self.innerHTML = template
  end
end