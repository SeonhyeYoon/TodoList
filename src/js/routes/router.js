import home from "../pages/home";
import todoApp from "../pages/app";
import notFound from "../pages/notfound";
import deletePage from "../pages/delete"

const routes = {
  "/": home,
  "/app": todoApp,
  "/delete": deletePage,
  "/*": notFound
}

const Router = function (pathname, params=null) {
  const isValidRoute = Object.keys(routes).find(key => key===pathname)
  const app = document.querySelector('#app')
  app.innerHTML = ''
  window.history.pushState(
  {},
  pathname,
  window.location.origin + pathname
  )
  if(isValidRoute === undefined || isValidRoute ===''){
  app.appendChild(notFound())
  }else{
  app.appendChild(routes[isValidRoute](params))
  }
  }
export { Router}