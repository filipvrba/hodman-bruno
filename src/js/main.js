import "../css/bootstrap.min.css";
import "../css/style.css";
import routesObj from "../json/routes.json";
import "./core";
import "./elements";
window.ROUTES_JSON = routesObj;
const TITLE_APP = document.title;
window.TITLE_APP = TITLE_APP;
window.ENVS = {GALLERY_CLICK: 0};
document.querySelector("#app").innerHTML = `${`\n<elm-priority-routes></elm-priority-routes>\n`}`