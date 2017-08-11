//react is a framework of JS
//component is the most undefined - we are creating App which extends from Component

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/button"
import adjectiveList from "./components/adjectiveList"
import beerList from "./components/beerList"
import beerAdjectives from "./components/beerAdjectives"
import "./components/beer.css"

//this describes the instance of the class
//this is a direction
//props are properties
class NameTag extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

//class = Computer
//props = {color:grey}
//constructor/click/render = typing, programming
//App is in component! (in terms of sets!)

//Components need to implement a render method!
//method is a function on a class!
class App extends Component {

  constructor() {
    super();

    this.state = {
      counter: 0,
      text: "Get your Beer Name",
      name: this.generateName()
    };
  }

  click = () => {
    this.setState(
      {name: this.generateName()}
    )
  }

  generateName = () => {
    return beerAdjectives[Math.floor(Math.random()*beerAdjectives.length)] + " " + adjectiveList[Math.floor(Math.random()*adjectiveList.length)] + " " + beerList[Math.floor(Math.random()*beerList.length)]
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the world famous Beer name generator</h2>
        </div>
        <p className="App-intro">
          {this.state.text}
        </p>
        <Button onClick={this.click} />
        <p></p>
        <NameTag name={this.generateName()} />
        <img className="beer1" src="https://dc8gwjuur0w0x.cloudfront.net/lists/avatars/000/000/047/original_o-PINT-GLASS-BEER-facebook.jpg?1473216955"></img>

      </div>
    );
  }
}

export default App;
