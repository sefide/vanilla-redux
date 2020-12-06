import React, {useState} from "react";
import { connect } from "react-redux";

function Home(props) {
    console.log("home props : " + JSON.stringify(props));
    const [ text, setText ] = useState("");
    
    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        setText("");
    }
    return (
        <div>
            <hi>To Do</hi>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange}></input>
                <button>Add</button>
            </form>
            <ul></ul>
        </div>
    )
};

// store로 부터 state 값을 가져다 줄거야 
function mapStateToProps(state, ownProps) {
    console.log(state, ownProps);

    // props 추가
    return {toDo: state};
}

export default connect(mapStateToProps) (Home);