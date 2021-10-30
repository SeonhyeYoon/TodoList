import makeElement from "../../utils/makeElement";

const list = function (){
    const template = `
    <aside id="list" class="list">
        <header>
            <h2>To DO LIST</h2>
        </header>
        <ul id="items" class="items">

        </ul>
    </aside>
    `

    return makeElement(template);
}

export default list;