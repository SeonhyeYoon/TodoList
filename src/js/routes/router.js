import index from "../pages/index";
import todoApp from "../pages/todo";
import notFound from "../pages/notFound";

const routes = {
  "/": index,
  "/app": todoApp
}

const Router =  function (pathname){
  const isValidRoute = Object.keys(routes).find(key => key===pathname);
 
  // loading and unloading pages into the div app
  const app = document.querySelector('#app');

  window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
  );  
  
  if(isValidRoute === undefined){
    app.appendChild(notFound())
  } else{
      app.appendChild(routes[isValidRoute]()) 
  }
  
}


export { Router}