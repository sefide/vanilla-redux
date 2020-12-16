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


#### connect
component에 store를 연결
connect는 2개의 arguments를 가진다. => state, dispatch
store에서 원하는 것에 따라 두 argument중 하나를 선택하면 된다. 

*state* : getState()와 같이 stage 정보를 알고 싶다면 사용한다. component에 props를 추가할 수도 있다.  <br>
=> 

```jsx
function mapStateToProps(state, ownProps?)
```
redux state로부터 받은 데이터를 해당 컴포넌트의 props로 전달한다. 

state : redux store로부터 받은 state
ownProps : component의 props

*dispatch*
store 혹은 reducer에게 메세지를(action?) 전달하고 싶다면 dispatch 메소드를... <br>
=> 
```jsx
function mapDispatchToProps(dispatch, ownProps?)
```

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


### Redux Toolkit
반복되는 리덕스 코드를 줄여줄 수 있도록 도와주는 도구
https://redux-toolkit.js.org/

#### Redux Toolkit에서 state.push 가 가능한 이유
redux를 사용할 때 state의 불변성을 지켜줘야한다. 이를 위해 state값이 변경될 때마다 새로운 state를 생성하여 갈아끼워주곤 했는데 .. <br/>
하지만 toolkit을 사용하면서 state.push가 가능해졌다. 이건 불변성을 깨트리는게 아닌가 ?

이것이 가능한 이유는 바로 toolkit이 state.push 하위에서 동작하기 때문이다. 
createReducer내에서 push메소드 동작 시, 기존 state값을 변경하는 것처럼 보이지만 내부적으로는 변경하고자 하는 새로운 state값을 생성하여 갈아끼워 준다.
이렇듯 state의 불변성 관리를 쉽게 할 수 있도록 도와주는 역할을 하는건 실제 immer라는 라이브러리 덕분인데 자세한건 아래를 참고하자.
참고 : https://github.com/immerjs/immer