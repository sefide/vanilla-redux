# Vanilla Redux

Learning Vanilla-Redux and React-Redux

### Redux
data를 저장하는 store가 있다.
store를 생성하기 위해서는 createStore 메소드를 이용한다. 
createStore의 첫번째 인자로는 reducer를 전달해야 하는데 
이 때 reducer는 데이터를 변화시킬 수 있는 함수로 action에 따라 어떻게 변화시킬지 결정한다.

action은 dispatch 메소드를 통해 전달된다.

subscribe는 store안에 있는 변화에 대해 노티해준다.