import React, { Component } from 'react';
import Blockchains from './containers/Blockchains/Blockchains';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number:{
      value: 120,
      density: {
        enable: true,
        value_area: 1500
      }
    },
    color:{
      value: '#c0293b'
    },
    shape:{
      type: 'circle'
    },
    opacity:{
      value: 0.5,
      random: true,
      anim:{
        enable: true,
        speed: 10
      }
    },
    size:{
      value: 3
    },
    line_linked: {
      color: '#565b5f'
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
        <nav className="pa3 pa4-ns">
         <h1 className="link dim b f1 f-headline-ns tc db mb3 mb4-ns" >Blockchain Demo</h1>
        </nav>
        <div>
          <Blockchains />
        </div>
        <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
        <small className="f6 db tc">© 2018 <b className="ttu">YIFANG LO</b>, All Rights Reserved</small>
        </footer>
      </div>
    );
  }
}

export default App;
