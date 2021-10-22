import logo from "../components/icons/logo";
import tagline from "../components/header/tagline";
import link from "../components/ui/link"
import makeElement from "../utils/makeElement";

const homeLanding = function (params){
  
  const homeHeader = document.createElement('header');
  homeHeader.classList.add('home-header');
  homeHeader.appendChild(makeElement(logo()));
  homeHeader.appendChild(makeElement(tagline('Manage Your Tasks with To Do List!')));
  homeHeader.appendChild(link('To Do App', '/app'));

  return homeHeader;
}

export default homeLanding;