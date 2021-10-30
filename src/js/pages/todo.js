import { getStore } from "../redux/store"

const todoApp = function (){
  const itemList = getStore();
  const page = document.createElement('div');
  console.log(itemList);
  return page;
}

export default todoApp