import React from 'react';
import Toolbar from './components/Toolbar';

function App(props) {

  return (
    <Toolbar URL={props.URL}/>
  );
}

export default App;
