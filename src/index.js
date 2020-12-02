import { createStore } from "redux";

// store - date를 저장하는 곳
// state - application에서 변화하는 data, 아래 코드에서는 count 
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

const PLUS = "PLUS";
const MINUS = "MINUS";

// reducer는 data를 변화시키고 반환하는 function
// action은 object여야 함
const countModifier = (count = 0, action) => {
  // modify state... 
  // console.log(count, action);
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  // console.log("there was a chnage on the store");
  // console.log(countStore.getState());
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);

plus.addEventListener("click", () => countStore.dispatch({type : PLUS}));
minus.addEventListener("click", () => countStore.dispatch({type : MINUS}));

// store.dispatch(action) 시, redux가 reducer를 call 
// countStore.dispatch({type : "PLUS"});
// countStore.dispatch({type : "PLUS"});
// countStore.dispatch({type : "PLUS"});
// countStore.dispatch({type : "MINUS"});

// console.log(countStore);
// => dispatch, subscribe, getState, replaceReducer 등의 function이 있다.

console.log(countStore.getState());
// => state 데이터 (count)