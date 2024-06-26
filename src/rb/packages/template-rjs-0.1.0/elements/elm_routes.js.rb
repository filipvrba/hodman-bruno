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
    init_meta(page)
    
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

  def init_meta(page)
    title = "#{page.title} | #{TITLE_APP}"

    # Title
    document.title = title
    # document.query_selector('meta[name="title"]')
    #   .set_attribute('content', title)
    # document.query_selector('meta[property="og:title"]')
    #   .set_attribute('content', title)
    # document.query_selector('meta[property="twitter:title"]')
    #   .set_attribute('content', title)

    # # Description
    # document.query_selector('meta[name="description"]')
    #   .set_attribute('content', page.description)
    # document.query_selector('meta[property="og:description"]')
    #   .set_attribute('content', page.description)
    # document.query_selector('meta[property="twitter:description"]')
    #   .set_attribute('content', page.description)
    
    # # Image
    # document.query_selector('meta[property="og:image"]')
    #   .set_attribute('content', page.image)
    # document.query_selector('meta[property="twitter:image"]')
    #   .set_attribute('content', page.image)

    # # Url
    # document.query_selector('meta[property="og:url"]')
    #   .set_attribute('content', location.href)
    # document.query_selector('meta[property="twitter:url"]')
    #   .set_attribute('content', location.href)
  end
end
