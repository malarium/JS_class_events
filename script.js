"use strict";

const inputElem = document.querySelector(".section_input");
const outputElem = document.querySelector(".section_output ul");
const terminator = document.querySelector(".terminator");

const createListElement = (value) => {
  const listElement = document.createElement("li");
  listElement.classList.add("listElement");
  listElement.textContent = value;
  outputElem.insertAdjacentElement("afterbegin", listElement);
};

const handleDataInput = (e) => {
  e.preventDefault();
  createListElement(e.target[0].value);
  e.target[0].value = "";
};

const handleOutput = (e) => {
  e.target.remove();
};

const terminateListeners = (e) => {
  e.preventDefault();
  inputElem.removeEventListener("submit", handleDataInput);
  outputElem.removeEventListener("click", handleOutput);
  terminator.removeEventListener("click", terminateListeners);
};

inputElem.addEventListener("submit", handleDataInput);

outputElem.addEventListener("click", handleOutput);

terminator.addEventListener("click", terminateListeners);

//InsertAdjacentElement
const waysToPlaceElem = ["beforebegin", "afterbegin", "beforeend", "afterend"];
const list = document.querySelector(".myList"); //Commented out in HTML! Uncomment to see how it works!

waysToPlaceElem.forEach((el) => {
  const newListElem = document.createElement("span");
  newListElem.textContent = el;
  newListElem.style.color = "red";
  list.insertAdjacentElement(el, newListElem);
});
