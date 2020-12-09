import React, {useState} from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store"

function Home({toDos, addToDo}) {
    console.log("home toDos : " + JSON.stringify(toDos));
    const [ text, setText ] = useState("");
    
    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    return (
        <div>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul>{JSON.stringify(toDos)}</ul>
        </div>
    )
};

// store로부터 state 값을 가져다 줄거야 
function mapStateToProps(state, ownProps) {
    console.log(state, ownProps);

    // props 추가
    return {toDos: state};
}

function mapDispatchToProps(dispatch) {
    return {
        // addToDo라는 function을 생성
        addToDo : (text) => dispatch(actionCreators.addToDo(text))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Home);