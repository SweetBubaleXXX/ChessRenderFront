import React from 'react';
import Toolbar from './components/Toolbar';
import './assets/styles/App.scss';

function App(props) {

  return (
    <Toolbar URL={props.URL}/>
  );
}

export default App;
