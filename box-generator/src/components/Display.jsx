import React from 'react';

const Display = (props) => {
    const colors = props.allColors;
    return (
        <div style={{display: 'flex', flexWrap:'wrap', width: 800, marginTop:30}}>
            { colors.map( (oneColor, idx) => 
                <div key={idx} style={{width: 100, height: 100,  marginRight: 10, marginBottom: 10, backgroundColor: oneColor}}></div>
            )}
        </div>
    )
}

export default Display;