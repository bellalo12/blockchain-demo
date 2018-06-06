import React from 'react';
import './Blockchain.css';

class Blockchain extends React.Component{
  constructor(props) {
   super(props);


   const now = new Date().toUTCString();
   const iniData = this.props.id > 0
   ? this.props.data
   : "Welcome to Blockchain Demo"

   this.state={
     id: this.props.id,
     date: now,
     data: iniData,
     nonce: 0,
     previousHash: this.props.previousHash,
     hash: '0',
     validHash: true
   }

 }

 componentDidMount(){
   const {id, date, data, previousHash} = this.state;
   this.props.repareHash(id, date, data, previousHash, this.renderHash.bind(this), this.renderNonce.bind(this));
 }
 

 renderHash = (pro) => {
   let params = pro;
   this.setState({hash: params.hash});
 }

 renderNonce = (pro) => {
   let params = pro;
   this.setState({nonce: params.nonce, validHash: true});
 }

 renderGenBlock = () => {
   const {id} = this.state;
   return id > 0
   ? `Block #${id}`
   : 'Genesis Block';
 }

 componentWillReceiveProps(nextProps) {
   const {id, date, data, previousHash, nonce} =this.state;
   const nProps = nextProps;
   if(nProps.previousHash !== previousHash) {
     this.props.onHashChange(id, date, data, previousHash, nonce, this.renderHash.bind(this));
     this.setState({previousHash: nProps.previousHash})
   }
 }

 repair = () => {
   const {id, date, data, previousHash} = this.state;
   this.props.repareHash(id, date, data, previousHash, this.renderHash.bind(this), this.renderNonce.bind(this));
 }


 onDataChange = (event) =>
 {
   const data = event.target.value;
   const {id, date, previousHash, nonce} = this.state;
   this.setState({data: data});
   this.props.onHashChange(id, date, data, previousHash, nonce, this.renderHash.bind(this));
 }

 nonceOrRepairHash = () => {
    return this.verifyHash(this.state.hash)
    ? <p className="nonce input-group-text mt3 br2 shadow-5">{this.state.nonce}</p>
    : <p className="nonc input-group-text mt3 br2 shadow-5">{this.repair()}</p>

  }

 verifyHash(hash) {
   return (hash.substring(0, 4) === '0000');
 }

 colorHash = (hash) => {
   return this.verifyHash(hash.toString())
   ? {borderColor: 'green', color: 'green', backgroundColor: 'rgba(0,255,0,0.1)' }
   : {borderColor: 'red', color: 'red', backgroundColor: 'rgba(255,0,0,0.1)'};
 }

 colorPreviousHash = (hash) => {
   if(hash !== 0) {
     return this.verifyHash(hash.toString())
     ? {color: 'green'}
     : {color: 'red'};
   }
 }


    render(){
      return(
        <div class="card text-center ma4 center">
        <div class="card-body">
          <div class="form-row">
          <div class="form-group col-md-2">
            <p type="email" class="form-control">Data</p>
          </div>
          <div class="form-group col-md-10">
            <input type="text" class="form-control" value={this.state.data} onChange={this.onDataChange}/>
          </div>

          <div className="previousHash">
          <p className="label" id="previousHash">Previous Hash</p>
          <p className="hash" id="previous" style={this.colorPreviousHash(this.state.previousHash)}>{this.state.previousHash}</p>
        </div>


       <div className="hashes">
         <p className="label" id="presentHash">Hash</p>
         <p className="hash br2 underline"id="present" style={this.colorHash(this.state.hash)}>{this.state.hash}</p>
       </div>


           <div class="input-group mb-3">
           <div className="grid3">
             <p className="blockOrder f2 title pa2">{this.renderGenBlock()}</p>
             <p className="blockDate">on {this.state.date}</p>
           </div>
           <div className='pa1'>
              {this.nonceOrRepairHash()}
          </div>
         </div>
          </div>
          </div>


      </div>

      );
    }
}

export default Blockchain;
