import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import Subcontent from './components/Subcontent';


function App() {
  const headerStyle = {
    backgroundColor: '#6aa84f',
    border: 'black 1px solid',
    padding: '10px',
    margin: '10px',
    height: '100px'
  }
  const navigatorStyle = {
    backgroundColor: '#6fa8dc',
    border: 'black 1px solid',
    flex: '1',
    height: '400px',
    padding: '10px'
  }
  const mainStyle = {
    backgroundColor: '#e06666',
    border: 'black 1px solid',
    flex: '3',
    height: '450px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }

  return (
    <div className="app">
        <Header style={headerStyle}/>
        <div className='row'>
          <Navigation style={navigatorStyle}/>
          <Main style={mainStyle}/>
        </div>
    </div>
  );
}
                
export default App;