import makeElement from "../../utils/makeElement";

const item = function ({id, category, duedate, isComplete}) {
    const template = `
    <li class="item horizontal" data-key="${id}">
        <div>
            <p>${category}</p>
            <p>${duedate}</p>
            <p>${isComplete}</p>
        </div>
        <div>
            <p class="controls">
                <button>edit</button>
                <button>delete</button>
            </p>
        </div>
    </li>
    `
    return makeElement(template);
}

export default item;