import React, {useState} from "react";

function Home() {
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
}

export default Home;