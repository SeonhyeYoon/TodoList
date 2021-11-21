import index from "../pages/index";
import todoApp from "../pages/todo";
import notFound from "../pages/notFound";

const routes = {
  "/": index,
  "/app": todoApp
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
  app.appendChild(routes[isValidRoute]() )
  }
  }
export { Router}