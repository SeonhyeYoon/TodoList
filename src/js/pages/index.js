import logo from "../components/icons/logo";
import tagline from "../components/header/tagline";
import link from "../components/ui/link"
import makeElement from "../utils/makeElement";

const index = function (params){
  
  const homeHeader = document.createElement('header');
  homeHeader.classList.add('home-header');

  const pageLogo = makeElement(logo());
  const pageTagline = makeElement(tagline('Manage Your Tasks with To Do List!'))
  const appLink = link('To Do App', '/app')
  
  homeHeader.append(pageLogo);
  homeHeader.append(pageTagline);
  homeHeader.append(appLink);

  return homeHeader;
}

export default index;