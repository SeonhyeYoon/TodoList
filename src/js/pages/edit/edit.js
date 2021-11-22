import makeElement from "~/src/js/utils/makeElement";
import button from "../../components/ui/button";
import reducer from "../../redux/reducers";
import { Router } from "../../routes/router";
import { getStore } from "../../redux/store";

const cancelButton = button("cancel");
const editButton = button("edit");

const editPage = function(props){
    const page = document.createElement('div');

    //Cancel Edit function
    function onCancelEdit (e){
        Router('/app');
    }

    // Edit function
    function onEditTodo(e){
        const index = getStore().findIndex((item)=>{
            return(item.id === props.id)
        });        
        const action = {
            type: "edit",
            payload: {index},
            cb: ()=>Router('/app')
        };
        reducer(action);
    }

    const index = getStore().findIndex((item)=>{
        return(item.id === props.id)
    });

    let headerTemplate = `
    <header class="manage center-in-page">
        <h1>Edit Todo List Details</h1>
        <div class="form" data-key="id">
            <label class="form" for="id">
                ID
                <input type="text" placeholder="${getStore()[index].id}" disabled>
            </label>

            <label class="form" for="category">
                Category
                <input type="text" placeholder="${getStore()[index].category}">
            </label>

            <label class="form" for="isComplete">
                Completed
                <input type="checkbox" checked>
            </label>
            
            <label class="form" for="description">
                Description
                <input type="text" placeholder="${getStore()[index].description}">
            </label>

            <label class="form" for="startDate">
                Start Date            
                <input type="text" placeholder="${getStore()[index].startDate}">
            </label>

            <label class="form" for="startTime">
                Start Time            
                <input type="text" placeholder="${getStore()[index].startTime}">
            </label>

            <label class="form" for="duedate">
                End Date            
                <input type="text" placeholder="${getStore()[index].duedate}">
            </label>

            <label class="form" for="endTime">
                End Time            
                <input type="text" placeholder="${getStore()[index].endTime}">
            </label>
        </div>
        <div class="button"></div>
    </header>
    `

    const pageHeader = makeElement(headerTemplate);
    cancelButton.addEventListener('click', onCancelEdit);
    editButton.addEventListener('click', onEditTodo);
    pageHeader.querySelector('.button').append(cancelButton, editButton);
    page.append(pageHeader);

    return page;
}

export default editPage;