import { update } from 'lodash';
import {getStore, updateStore} from './store'

function reducer (action){

    store = getStore();       
    const index = action.payload.index;         
    const newStore = [...store.slice(0, index), ...store.slice(index + 1)]

    switch(action.type){
        case "delete":
        // grabing the current store
            updateStore(newStore)
            action.cb( )
            return  "remove todo category";
        case "edit": 
            updateStore(newStore);
            action.cb();
            return "edit todo with an id";
        case "add": 
            return "create a new todo";
        default: return store;
    }

}

export default reducer