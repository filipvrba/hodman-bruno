import 'galleryObj', '../../json/gallery.json'

export default class ElmGallery < HTMLElement
  def initialize
    super
    
    @gallery_index_history = nil

    init_elm()
    window.gallery_click = gallery_click
    window.modal_btn_prev_click = modal_btn_prev_click
    window.modal_btn_next_click = modal_btn_next_click
  end

  def gallery_click(index)
    @gallery_index_history = index
    card = gallery_obj.gallery[index]
    Events.emit('#app', ENVS::GALLERY_CLICK, card)
  end

  def modal_btn_prev_click()
    index = @gallery_index_history <= 0 ?
      (gallery_obj.gallery.length - 1) :
      (@gallery_index_history - 1)
    gallery_click(index)
  end

  def modal_btn_next_click()
    index = (@gallery_index_history + 1) % gallery_obj.gallery.length
    gallery_click(index)
  end

  def init_elm()
    l_picture_card = lambda do
      cards = []

      gallery_obj.gallery.each_with_index do |card, i|
        card_template = """
<div class='col-4 mb-4'>
  <elm-lazy-image src='#{card.picture}' class='btn-img d-block mx-auto' onclick='galleryClick(#{i})' style='border-radius: 0.375rem' alt='#{card.name}' data-bs-toggle='modal' data-bs-target='#galleryModal'></elm-lazy-image>
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