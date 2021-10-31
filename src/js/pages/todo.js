import makeElement from "../utils/makeElement";
import logo from "../components/icons/logo";
import tagline from "../components/header/tagline";
import { getStore } from "../redux/store"
import list from "../components/cards/list";
import item from "../components/cards/item";

const todoApp = function (){
  /* Branding Header */
  const page = document.createElement('div');
  const banner = document.createElement('header');
  banner.classList.add('app-home-header');

  const pageLogo = makeElement(logo());
  const pageTagline = makeElement(tagline('List Your Work!'))
  banner.append(pageLogo);
  banner.append(pageTagline);

  page.append(banner);

  /* Todo Component */
  const itemList = getStore();
  const container = list();

  if (itemList !== null){
    const ul = container.querySelector('ul');
    const elements = itemList.map(comp=> item(comp));
    elements.forEach(element=> ul.append(element));
    page.append(container);
  }

  /* new todo category */
  let add = document.createElement('div');
  let button = document.createElement('button');
  add.classList.add('add-category');
  button.append('Add Todo Category');
  add.append(button);
  page.append(add);

  return page;
}

export default todoApp