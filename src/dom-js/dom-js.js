function createBasicElm (type, className, textContent) {
  const element = document.createElement(type);

  if (className !== null) {
    element.classList.add(className);
  }

  if (textContent !== null) {
    element.textContent = textContent;
  }
  return element;
}

function createInput (id, type, name) {
  const input = document.createElement('input');

  input.id = id;
  input.type = type;
  input.name = name;

  return input;
}
export{createBasicElm, createInput};