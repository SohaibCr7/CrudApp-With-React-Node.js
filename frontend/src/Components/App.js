import React from "react";
import Home from "./Home";
import "./App.css";
import {Routes,Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
