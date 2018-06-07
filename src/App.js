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
        <nav class="pa3 pa4-ns">
         <p class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns light-gray" title="Home">Blockchain Demo</p>
        </nav>
        <div>
          <Blockchains />
        </div>
        <footer class="pv4 ph3 ph5-m ph6-l mid-gray">
        <small class="f6 db tc">© 2018 <b class="ttu">YIFANG LO</b>, All Rights Reserved</small>
        </footer>
      </div>
    );
  }
}

export default App;
