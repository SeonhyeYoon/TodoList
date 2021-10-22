import makeElement from "../../utils/makeElement";


const link = function (label="ui link", path="/", className="ui-link"){
     const template = `<a href="${path}" class="${className}" data-path="${path}">${label}</a>`
     const element =  makeElement(template)
     return element
}

export default link