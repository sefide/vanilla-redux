import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// NEVER MUTATE STATE !!
const reducer = (state = [], action) => {
    console.log(action);
    switch(action.type) {
        case ADD_TODO:
            // return state.push(action.text); // mutating
            return [...state, { text: action.text , id : Date.now()}]; // spread operator
        case DELETE_TODO:
            return [];
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// vanilla
const createToDo = toDo => {
    const li = document.createElement("li");
    li.innerText = toDo;
    ul.appendChild(li);
}

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    store.dispatch({ type: ADD_TODO , text: toDo });
    // createToDo(toDo);
};

form.addEventListener("submit", onSubmit);