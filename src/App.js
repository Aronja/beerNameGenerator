//react is a framework of JS
//component is the most undefined - we are creating App which extends from Component

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./components/button"
import adjectiveList from "./components/adjectiveList"
import beerObject from "./components/beerList"
import {beerList} from "./components/beerList"
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
      beer: {
        ...this.generateBeer(),
        beerImage:"https://dc8gwjuur0w0x.cloudfront.net/lists/avatars/000/000/047/original_o-PINT-GLASS-BEER-facebook.jpg?1473216955",
        fullName: "Welcome"
      }
    };
  }

  click = () => {
    this.setState(
      {beer: this.generateBeer()},
    )
  }

  generateBeer = () => {
    var beer = beerObject[Math.floor(Math.random()*beerObject.length)];
    return {
      beerName:beer.name,
      beerImage:beer.image ,
      fullName:beerAdjectives[Math.floor(Math.random()*beerAdjectives.length)] + " " + adjectiveList[Math.floor(Math.random()*adjectiveList.length)] + " " +
      beer.name
      }
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the world famous Beer name generator</h2>
        </div>
        <p className="App-intro">
        </p>
        <Button onClick={this.click} />
        <p></p>
        <NameTag name={this.state.beer.fullName} />
        <p></p>
        <img className="beer1" src={this.state.beer.beerImage}></img>

      </div>
    );
  }
}

export default App;
