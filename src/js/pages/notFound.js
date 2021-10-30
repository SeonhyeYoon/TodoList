import makeElement from "../utils/makeElement";
import link from "../components/ui/link"

const notFound = function(){
  const page = document.createElement('div');
  let headerTemplate = `
  <header class="page-not-found center-in-page">
  <h1><span>404</span> <span>page not found</span></h1>
  </header>
  `
  const pageHeader = makeElement(headerTemplate);
  const homeLink = link("To Do App", "/app");

  pageHeader.append(homeLink);
  page.append(pageHeader);

  return page;
}

export default notFound;