import React from "react";

const Display = (props) => {
    const {doList} = props;

    const deleteHandler = (e) => {
        
    }

    return(
        <>
            <ul>
                {doList.map((task, idx) => 
                    <li key={idx}>{task} <input type={"checkbox"}></input></li>
                )}
            </ul>
        </>
    )
}

export default Display;