import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Namelist from './components/Namelist';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

class App extends Component {
  render() {
    return( <div>
    {/*} <Namelist /> 
      <Stylesheet primary={'true'} />*/}
      <Inline/>
      </div>
    );
  }
}

export default App;
