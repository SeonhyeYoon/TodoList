const header = function (title="uiHeader", className="ui-header"){
  console.log(className)
  const element = `<h1 class="${className}">${title}</h1>`;

  return element;
}

export default header