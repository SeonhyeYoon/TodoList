import makeElement from "~/src/js/utils/makeElement"
import button from "../../components/ui/button"
import { Router } from './../../routes/router'
import { getStore } from "../../redux/store"
import reducer from './../../redux/reducers'

const cancelButton = button("cancel");
const deleteButton = button("delete");

const deletePage = function(props){
    const page = document.createElement('div');

    // Cancel Delete Function
    function onCancelDelete (e){
        Router('/app');
    }
    
    // Delete Function
    function onDeleteCategory(e){
        const index = getStore().findIndex((category)=>{
            return(category.id === props.id)
        });
        const action = {
            type: "delete",
            payload: {index},
            cb:()=>Router('/app')
        };
        reducer(action);
    }
    
    const index = getStore().findIndex((category)=>{
        return(category.id === props.id)
    });
    
    let headerTemplate = `
    <header class="manage center-in-page">
        <h1>Delete Category of TodoList</h1>
        <div class="category">
            <h3 class="crud">${getStore()[index].category}</h3>
            <p>${getStore()[index].duedate}</p>                       
        </div>
        <div class="button"></div>
    </header>
    `;

    const pageHeader = makeElement(headerTemplate);
    cancelButton.addEventListener('click', onCancelDelete)  
    deleteButton.addEventListener('click', onDeleteCategory) 
    pageHeader.querySelector('.button').append(cancelButton, deleteButton)
    page.append(pageHeader)

    return page;
}

export default deletePage