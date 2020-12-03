import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
    return { 
        type: ADD_TODO,
        text 
    };
}

const deleteToDo = (id) => {
    return { 
        type: DELETE_TODO,
        id 
    }
}

// NEVER MUTATE STATE !!
const reducer = (state = [], action) => {
    console.log(action);
    switch(action.type) {
        case ADD_TODO:
            // return state.push(action.text); // mutating
            return [{ text: action.text , id : Date.now()}, ...state]; // spread operator
        case DELETE_TODO:
            return state.filter(toDos => toDos.id !== action.id);
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    store.dispatch(deleteToDo(id));
}

const paintToDo = () => {
    const toDos = store.getState();
    ul.innerHTML = "";
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerHTML = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    });
}
store.subscribe(paintToDo);

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// vanilla
// const createToDo = toDo => {
//     const li = document.createElement("li");
//     li.innerText = toDo;
//     ul.appendChild(li);
// }

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo);
    // createToDo(toDo);
};

form.addEventListener("submit", onSubmit);