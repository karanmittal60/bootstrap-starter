import React, { Component } from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import FirstBootstrap from "./components/FirstBootstrap/firstBootstrap";
// import ImageStack from "./components/imageStack/imageStack";
import Portfolio from "./components/imageStack/portfolio";

class App extends Component {
  render() {
    return (
      <div className="App">
          {/*<FirstBootstrap/>*/}
          {/*<ImageStack/>*/}
          <Portfolio/>
      </div>
    );
  }
}

export default App;
