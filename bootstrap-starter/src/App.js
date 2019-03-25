import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';
// import FirstBootstrap from "./components/FirstBootstrap";
import ImageStack from "./components/imageStack";

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<FirstBootstrap/>*/}
          <ImageStack/>
      </div>
    );
  }
}

export default App;
