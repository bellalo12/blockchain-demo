import React, { Component } from 'react';
import Blockchains from './containers/Blockchains/Blockchains';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number:{
      value: 350,
      density: {
        enable: true,
        value_area: 1500
      }
    },
    line_linked: {
      color: '#756666'
    }
  },
  interactivity:{
    events:{
      onhover:{
        enable: true,
        mode: 'repulse'
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className="particles"
          params={particlesOptions}
        />
        <header >
          <h1 className="title">Blockchain</h1>
        </header>
        <div>
          <Blockchains />
        </div>
      </div>
    );
  }
}

export default App;
