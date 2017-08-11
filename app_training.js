import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/button"
import Counter from "./components/counter"

//this describes the instance of the class
//this is a direction
//props are properties
class NameTag extends Component {
  render() {
    return <div>Hello! {this.props.name} is cool</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div>
          <NameTag name="Astrid"/>
          <NameTag name="Jon"/>
      </div>
    )
  }
}
