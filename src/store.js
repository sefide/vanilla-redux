import { createStore } from "redux";
import { createAction, createReducer } from "@reduxjs/toolkit";

// addToDo, deleteToDo는 function
// .type은 텍스트
// addToDo() 할 경우 type과 payload 객체를 반환
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type :
//             return [{text : action.payload, id : Date.now()}, ...state];
//         case deleteToDo.type :
//             return state.filter(toDo => toDo.id !== action.payload);
//         default :
//             return state;
//     }
// }

// initialState, builderCallback
const reducer = createReducer([], {
    // action.Type
    [addToDo] : (state, action) => {
        state.push({text : action.payload, id : Date.now()}); // you can mutate, but don't return
    },
    [deleteToDo] : (state, action) => state.filter(toDo => toDo.id !== action.payload)
});

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
};

export default store;