import { createStore } from "redux";

// store - date를 저장하는 곳
// state - application에서 변화하는 data, 아래 코드에서는 count 
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

// reducer는 data를 변화시키고 반환하는 function
// action은 object여야 함
const countModifier = (count = 0, action) => {
  // modify state... 
  if (action.type === "PLUS") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

// store.dispatch(action) 시, redux가 reducer를 call 
countStore.dispatch({type : "PLUS"});
countStore.dispatch({type : "PLUS"});
countStore.dispatch({type : "PLUS"});
countStore.dispatch({type : "MINUS"});

// console.log(countStore);
// => dispatch, subscribe, getState, replaceReducer 등의 function이 있다.

console.log(countStore.getState());
// => state 데이터 (count)