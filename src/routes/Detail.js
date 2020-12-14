import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDo }) {
    // hooks
    // const id = useParams();
    console.log(toDo);

    return (
        <div>
            <h1>
                {/* js - Optional Chaining
                    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining
                 */}
                {toDo?.text}
            </h1>
            <h5>
                Created at: {toDo?.id}
            </h5>
        </div> 
    )
}

function mapStateToProps(state, ownProps) {
    const {
        match: {
            params: { id }
        }
    } = ownProps;

    return { toDo : state.find(toDo => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail)