import makeElement from "~/src/js/utils/makeElement";
import button from "../../components/ui/button";
import reducer from "../../redux/reducers";
import { Router } from "../../routes/router";
import { getStore } from "../../redux/store";

const cancelButton = button("cancel");
const addButton = button("Add");

const addPage = function(props){
const page = document.createElement('div');

    //Cancel Add function
    function onCancelAdd (e){
        Router('/app');
    }

    // Edit function
    function onAddTodo(e){
        const index = getStore().findIndex((item)=>{
            return(item.id === props.id)
        });
        const action = {
            type: "add",
            payload:{index},
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
                <input id="id" type="text" placeholder="Produce automatically" disabled>
            </label>

            <label class="form" for="category">
                Category
                <input id="category" type="text" placeholder="category">
            </label>

            <label class="form" for="isComplete">
                Completed
                <input id="isComplete" type="checkbox">
            </label>
            
            <label class="form" for="description">
                Description
                <input id="description" type="text" placeholder="Todo details">
            </label>

            <label class="form" for="startDate">
                Start Date            
                <input id="startDate" type="text" placeholder="Start Date">
            </label>

            <label class="form" for="startTime">
                Start Time            
                <input id="startTime" type="text" placeholder="Start Time">
            </label>

            <label class="form" for="duedate">
                End Date            
                <input id="duedate" type="text" placeholder="End Date">
            </label>

            <label class="form" for="endTime">
                End Time            
                <input id="endTime" type="text" placeholder="End Time">
            </label>
        </div>
        <div class="button"></div>
    </header>
    `
    const pageHeader = makeElement(headerTemplate);
    cancelButton.addEventListener('click', onCancelAdd);
    addButton.addEventListener('click', onAddTodo);
    pageHeader.querySelector('.button').append(cancelButton, addButton);
    page.append(pageHeader);

    return page;
}

export default addPage;