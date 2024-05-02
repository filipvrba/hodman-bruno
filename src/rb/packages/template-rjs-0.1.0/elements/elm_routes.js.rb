export default class ElmRoutes < HTMLElement
  def initialize
    super

    @l_hashchange = lambda { change_page() }

    change_page()
  end

  def connectedCallback()
    window.add_event_listener('hashchange', @l_hashchange)
  end

  def disconnectedCallback()
    window.remove_event_listener('hashchange', @l_hashchange)
  end

  def change_page()
    current_page = find_current_page()
    init_page(current_page) if current_page
  end

  def find_current_page()
    ROUTES_JSON.pages.each do |page|
      unless page.endpoint == location.hash.sub('#', '')
                              .gsub('-', '/')
        next
      end

      return page
    end

    return nil
  end

  def init_page(page)
    document.title = "#{page.title} | #{TITLE_APP}"
    
    file_name = page.endpoint.gsub('-', '_')
    Net.curl("./html/#{file_name}.html") do |content|
      init_elm(content, page)
    end
  end

  def init_elm(content, page = nil)
    template = """
    #{content.sub('TITLE', page.title) if page}
    """

    self.innerHTML = template
  end
end
