import home from "../pages/home";
import todoApp from "../pages/app";
import deletePage from "../pages/delete";
import editPage from "../pages/edit";
import notFound from "../pages/notfound";

const routes = {
  "/": home,
  "/app": todoApp,
  "/delete": deletePage,
  "/edit": editPage,
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