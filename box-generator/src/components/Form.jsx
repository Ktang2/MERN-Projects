import React from 'react';
import { useState } from 'react';

const Form = (props) => {
    const [newColor, setNewColor] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        props.onNewColor(newColor);
        setNewColor("");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Color: </label>
                <input type='text' value={newColor} onChange={(e) => setNewColor(e.target.value)} style={{marginLeft: 10, marginRight: 30}}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form;