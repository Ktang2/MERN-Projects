import React from 'react';
import Advertisement from './Advertisement';
import Subcontent from './Subcontent';

const Main = (props) => {
    const {style} = props;
    const subcontentStyle = {
        backgroundColor: '#ffd966',
        border: 'black 1px solid',
        flex: 1,
        padding: '10px'
    }
    const advertisementStyle = {
        backgroundColor: '#b4a7d6',
        border: 'black 1px solid',
        marginTop: 'auto',
        height: '15%',
        padding: '10px'
    }
    const flexSubcontent = {
        display: 'flex',
        gap: '20px',
        height: '80%'
    }

    return (
        <div style={style}>
            <div style={flexSubcontent}>
                <Subcontent style={subcontentStyle}/>
                <Subcontent style={subcontentStyle}/>
                <Subcontent style={subcontentStyle}/>
            </div>
            <Advertisement style={advertisementStyle}/>
        </div>
    )
}

export default Main;