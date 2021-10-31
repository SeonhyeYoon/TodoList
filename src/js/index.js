import {Router} from "./routes/router"
import {createStore} from "./redux/store";
import {dataFetcher} from "./utils/dataFetcher";

const app = document.querySelector("#app");

const onAppInit = async function(e){
    let todoItmes = await dataFetcher('./data/todo.json');
    
    if (todoItmes[0].id === undefined){       
        todoItmes = [...keyGenerator(todoItmes)]
    }

    createStore(todoItmes);
    Router(window.location.pathname);
}

window.addEventListener('load', onAppInit)