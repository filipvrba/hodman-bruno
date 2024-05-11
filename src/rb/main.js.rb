import '../css/bootstrap.min.css'
import '../css/style.css'
import 'routesObj', '../json/routes.json'

import './core'
import './elements'

window.ROUTES_JSON = routes_obj
TITLE_APP = document.title
window.TITLE_APP = TITLE_APP
window.ENVS = {
  GALLERY_CLICK = 0
}

document.querySelector('#app').innerHTML = """
<div class='container-lg py-3'>
  <elm-priority-routes></elm-priority-routes>
</div>
"""
