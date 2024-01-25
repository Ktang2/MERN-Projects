import React, { useState } from "react";

const Form = (props) => {
    const {setDoList, doList} = props;

    const [oneTask, setOneTask] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setDoList([...doList, oneTask]);
        setOneTask("");
    }

    return(
        <>
            <h1>To Do List</h1>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={(e) => setOneTask(e.target.value)} value={oneTask}></input>
                <button>Add</button>
            </form>
        </>
        
    )
}

export default Form;