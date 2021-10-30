import {getStore} from './store'

function reducers ({action, payload, ...rest}){

    switch(action.type){
        case "edit": return "edit todo";
        case "delete": return "remove todo with an id";
        case "add": return "create a new todo";
        default: return store
    }

}

export default reducers