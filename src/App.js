import React, { Component } from 'react';

import Toc from "./components/Toc";
import Content from "./components/Content";
import Subject from "./components/Subject";

import './App.css';


class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Subject title="web" sub="world wide web!"></Subject>
        <Subject title="web(props)" sub="world wide web(props)!"></Subject>
        <Toc></Toc>
        <Content title="HTML" sub="HTML is HyperText Markup Language(props)."></Content>
      </div>
    );
  }

}

export default App;
