import { createStore } from "redux";
import { createAction, createReducer, configureStore, createSlice } from "@reduxjs/toolkit";

// addToDo, deleteToDo는 function
// .type은 텍스트
// addToDo() 할 경우 type과 payload 객체를 반환
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

// initialState, builderCallback
// const reducer = createReducer([], {
//     // action.Type
//     [addToDo] : (state, action) => {
//         state.push({text : action.payload, id : Date.now()}); // you can mutate, but don't return
//     },
//     [deleteToDo] : (state, action) => state.filter(toDo => toDo.id !== action.payload)
// });

const toDos = createSlice({
    name: "toDosReducer", 
    initialState: [],
    reducers: {
        add : (state, action) => {
            state.push({text : action.payload, id : Date.now()});
        },
        remove : (state, action) => state.filter(toDo => toDo.id !== action.payload)
    }
});

const store = configureStore({reducer : toDos.reducer});

export const {
    add,
    remove
} = toDos.actions; //  action까지 관리해주는 createSlice

export default store;