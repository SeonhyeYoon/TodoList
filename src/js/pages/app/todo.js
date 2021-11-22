import makeElement from "~/src/js/utils/makeElement";
import logo from "~/src/js/components/icons/logo";
import tagline from "~/src/js/components/header/tagline";
import { getStore } from "~/src/js/redux/store"
import list from "~/src/js/components/cards/list";
import item from "~/src/js/components/cards/item";
import {Router} from "~/src/js/routes/router"

const todoApp = function (){
  const itemList = getStore();

  /* Branding Header */
  const page = document.createElement('div');
  const banner = document.createElement('header');
  banner.classList.add('app-home-header');

  const pageLogo = makeElement(logo());
  const pageTagline = makeElement(tagline('Make your own list!'))
  banner.append(pageLogo);
  banner.append(pageTagline);

  page.append(banner);

  const container = list();

  // Event Handler for editing todo list
  function onEditTodo(e){
    const categoryId = {id:e.currentTarget.dataset.key};
    Router('/edit', categoryId);
  }

  // EVENT HANDLER FUNCTION FOR REMOVING AN EMPLOYEE
  function onDeleteCategory (e){
    const categoryId = {id:e.currentTarget.dataset.key};    
    Router('/delete', categoryId);

}
  /* Todo Component */

  function render(){
    const ul = container.querySelector('ul');
    const elements = itemList.map(comp=> item(comp));
    elements.forEach(element=> {
      element.querySelector('#edit').addEventListener('click', onEditTodo)
      element.querySelector('#delete').addEventListener('click', onDeleteCategory);
      ul.append(element)
    });
    page.append(container);   
  }
  render();

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