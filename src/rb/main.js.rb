import '../css/bootstrap.min.css'
import '../css/style.css'
import 'routesObj', '../json/routes.json'

import './core'
import './elements'

window.ROUTES_JSON = routes_obj
TITLE_APP = document.title
window.TITLE_APP = TITLE_APP

document.querySelector('#app').innerHTML = """
<div class='container-lg py-3'>
  <elm-priority-routes></elm-priority-routes>
</div>
"""
