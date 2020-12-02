# Vanilla Redux

Learning Vanilla-Redux and React-Redux

Document: [https://redux.js.org/introduction/getting-started](https://redux.js.org/introduction/getting-started)

### Redux

- 리덕스를 사용하는 이유는 ?

    Redux is a predictable state container for JavaScript apps.

    state를 전역으로 관리하기 위해 상태 관리자로 사용한다.

<br> 
redux에는 data를 저장하는 Store가 있다.
Store를 생성하기 위해서는 createStore 메소드를 사용한다.

```jsx
const Store = reducer(counterReducer);
```

createStore의 첫번째 인자로 reducer를 전달해야 한다.
reducer는 데이터를 변경하는 역할을 하는 함수로 action에 따라 어떻게 변화시킬지 결정한다.

```jsx
function reducer(state = 0, action) {
  switch (action.type) {
    case 'action1':
      return { value: state + 1 };
    case 'action2':
      return { value: state - 1 };
    default:
      return state;
  }
};

store.dispatch({ type: 'action1' });
store.dispatch({ type: 'action2' });
```

action은 dispatch 메소드를 통해 전달된다.

이 때 action은 type을 가진 Object여야 하며 String이 될 수 없다.
action의 type은 String이 아닌 상수로 선언해둬야지 오타로 인한 휴먼 에러를 줄일 수 있다.
<br> 
<br> 
Store 안의 데이터(state) 값의 변화를 감지하기 위해서는 subscribe 메소드를 사용한다.

```jsx
store.subscribe(() => console.log(store.getState()))
```

subscribe는 첫번째 인자로 state가 변경되었을 때 수행시킬 함수를 받는다.

<br>

### Three Principles

[https://redux.js.org/understanding/thinking-in-redux/three-principles](https://redux.js.org/understanding/thinking-in-redux/three-principles)

**하나의 application에는 하나의 Store로**

``` A single state tree also makes it easier to debug or inspect an application; it also enables you to persist your app's state in development, for a faster development cycle. ```

2개 이상의 Store로 쪼갤 수 있지만, 위 장점이 무효화될 수 있다.

<br> 


**NEVER MUTATE STATE  ! NEW STATE OBJECT !**

state는 기본적으로 readOnly로 불변성을 지켜줘야 한다. <br>
state 수정은 action을 통해서만 가능한데, 값 수정 시 데이터를 변경하여 mutating 하지 말자. <br>
state 값이 배열인 경우, 배열 값을 변경하기 위해 push 같은 행위를 하지 말아야 한다. 변경하기 위해서는 이전의 값과 새로운 값이 더해진 새로운 배열을 생성해야 한다.
