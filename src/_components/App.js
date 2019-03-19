// File path : ./src/_components/App.js

import React, { Component } from 'react';
import logo from '../_assets/logo.svg';
import '../_css/App.css';
import {establishments} from './_establishments/fixtures'
import Establishment from './_establishments/Establishment'

class App extends Component {
  constructor (props){
    super (props);
    this.state = {
      pseudo : "Inconnu"
    }
  }

  randomPseudo = () => {
    let randomPseudo    = ""
    const possible      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const size          = Math.floor(Math.random() * 10) + 5
    for( let i=0; i < size; i++ ){
        randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    //  Update the state via setState() inherited from Component class
    this.setState({
        pseudo : randomPseudo
    })
  }

  render() {
    const listEstablishment = establishments.map( (establishment) => {
        return (
            <Establishment
                key={ establishment.id }
                establishment={ establishment }
            />
        )
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h2>Welcome "{ this.state.pseudo }" to { this.props.title }</h2>
        </div>
        <div className="App-intro">
          <p> <a onClick={ this.randomPseudo } >Changer le pseudo !</a> </p>
          <section>
            { listEstablishment }
          </section>
        </div>
      </div>
    );
  }
}

export default App;
