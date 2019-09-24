'use strict';

const button = document.body.querySelector("button");
const input = document.body.querySelector("input");
const ul = document.body.querySelector("ul");
let li;

function returnInputLength() {
    return input.value.length;
}
function createElementLi() {
    li = document.createElement("li");
}
function addInputValue() {
    li.append(document.createTextNode(input.value));
}
function insertLiList() {
    ul.insertAdjacentElement('beforeend', li);
}
function cleanInput() {
    input.value= "";
}

function keyPressValue(key) {
    if (key.keyCode === 13) {
        addItemsList();
    }
}

function addItemsList() {
    if (returnInputLength() > 0) {
        createElementLi();
        addInputValue();
        insertLiList();
        cleanInput();
    }
}

input.addEventListener("keypress", keyPressValue);
button.addEventListener("click", addItemsList);