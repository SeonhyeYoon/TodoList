import { create, update } from 'lodash';
import {createStore, getStore, updateStore} from './store'

function reducer (action){

    const store = getStore();
    const index = action.payload.index;
    const newStore = [...store.slice(0,index), ...store.slice(index+1)]

    switch(action.type){
        case "delete":
        // grabing the current store            
            updateStore(newStore);
            action.cb();    
            return  "remove todo category";
        case "edit": 
            const category = document.getElementById("category").value;
            getStore()[index].isComplete = document.getElementById("isComplete").value;
            getStore()[index].description = document.getElementById("description").value;
            getStore()[index].startDate = document.getElementById("startDate").value;
            getStore()[index].startTime = document.getElementById("startTime").value;
            getStore()[index].duedate = document.getElementById("duedate").value;
            getStore()[index].endTime = document.getElementById("endTime").value;
            const editStore = [category, isComplete, description, startDate, startTime, duedate, endTime];
            updateStore(editStore);
            action.cb();
            return "edit todo with an id";
        case "add": 
            const addStore = [...store.slice(index), ...store.slice(index+1)];
            
            updateStore(addStore);
            action.cb();
            return "create a new todo";
        default: return store;
    }

}

export default reducer