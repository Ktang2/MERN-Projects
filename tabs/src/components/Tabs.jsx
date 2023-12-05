import React from 'react';
import { useState } from 'react';
import './Tabs.css';

const Tabs = (props) => {
    const {allTabs} = props;
    const [currentTab, setCurrentTab] = useState(allTabs[0]);
    const clickHandler = (idx) => {
        setCurrentTab(allTabs[idx])
    }

    return (
        <div className='component'>
            <div className='tabs'>
                {allTabs.map((tab, index) => (
                    <button key={index} className='oneTab' onClick={() => clickHandler(index)}>
                        {tab.title}
                    </button>
                ))}
            </div>
            <div className='content'>
                <p>{currentTab.content}</p>
            </div>
        </div>
    )
}

export default Tabs;