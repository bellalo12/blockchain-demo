import React, {Component} from 'react';
import Blockchain from '../../components/Blockchain/Blockchain';
import AddBlock from '../../components/AddBlock/AddBlock';
import {sha256} from 'js-sha256';
import './Blockchains.css';


class Blockchains extends Component {

  constructor() {
    super();
    this.state = {
      number: 1,
      hashes: [],
      data: ''
    }
  }

  createBlockchains = () => {
    const {number} = this.state;
    let vue = [];
    vue.push(<Blockchain
      key={0}
      id={0}
      repairHash={this.repairHash.bind(this)}
      previousHash={0}
      onHashChange={this.onHashChange.bind(this)}/>);
    for(let i = 1; i < number; i++) {
      vue.push(<Blockchain
        key={i} id={i}
        repairHash={this.repairHash.bind(this)}
        previousHash={this.state.hashes[i-1]}
        onHashChange={this.onHashChange.bind(this)}
        data={this.state.data}/>);
    }
    return vue;
  }

  addBlock = () => {
    this.setState({number: this.state.number+1});
  }

  addData = (event) => {
    this.setState({data: event.target.value});
  }

  repairHash = (id, date, data, previousHash, renderHash, renderNonce) => {
    let nonce = 0;
    let hash = this.createHash(date, data, previousHash, nonce);
    while(hash.substring(0, 4) !== '0000') {
      nonce++;
      hash = this.createHash(date, data, previousHash, nonce);
    }
    console.log('repair', id, date, data, previousHash, nonce);
    let hashes = this.state.hashes;
    hashes[id] = hash;
    renderHash({hash: hash});
    renderNonce({nonce: nonce});
    this.setState({hashes: hashes});
    this.setState({data: ''});
  }

  createHash = (data, date, previousHash, nonce) => {
    return sha256(data + date + nonce + previousHash);
  }

  onHashChange = (id, date, data, previousHash, nonce, renderHash) =>
  {
    console.log('change', id, date, data, previousHash, nonce);
    let hash = this.createHash(date, data, previousHash, nonce)
    let hashes = this.state.hashes;
    hashes[id] = hash;
    this.setState({hashes: hashes});
    renderHash({hash: hash});
  }


  render(){
    return (
      <div className="chain">
        {
          this.createBlockchains().map(block => {
            return block;
          })
        }
        <AddBlock addBlock={this.addBlock} addData={this.addData} data={this.state.data}/>
      </div>
    );
  }
}

export default Blockchains;
