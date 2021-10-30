import { getStore } from "../redux/store"
import list from "../components/cards/list";
import item from "../components/cards/item";

const todoApp = function (){
  const itemList = getStore();
  const page = document.createElement('div');
  const container = list();

  if (itemList !== null){
    const ul = container.querySelector('ul');
    const elements = itemList.map(comp=> item(comp));
    elements.forEach(element=> ul.append(element));
    page.append(container);
  }

  return page;
}

export default todoApp