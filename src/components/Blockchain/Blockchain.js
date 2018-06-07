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
   this.props.repairHash(id, date, data, previousHash, this.renderHash.bind(this), this.renderNonce.bind(this));
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
   ? `Block # ${id}`
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
   this.props.repairHash(id, date, data, previousHash, this.renderHash.bind(this), this.renderNonce.bind(this));
 }


 onDataChange = (event) =>
 {
   const {id, date, data, previousHash, nonce} = this.state;
   this.setState({data: event.target.value});
   this.props.onHashChange(id, date, data, previousHash, nonce, this.renderHash.bind(this));
 }

 nonceOrRepairHash = () => {
    return this.verifyHash(this.state.hash)
    ? <p className="nonce input-group-text center create shadow-5 pointer bg-purple white" style={{width:'80px', height:'80px'}}>{this.state.nonce}</p>
    : <button className="nonce center input-group-text build btn pointer btn-info shadow-5" style={{width:'75px', height:'75px'}} onClick={this.repair}>build</button>

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
        <div className="card text-center ma4 center br3 shadow-5" style={{width:'950px'}}>
        <div className="card-body">
          <div className="form-row">
          <div className="form-group col-md-2">
            <p className="form-control bg-purple white">Data</p>
          </div>
          <div className="form-group col-md-10">
            <input type="text" className="form-control" value={this.state.data} onChange={this.onDataChange}/>
          </div>

          <div className="previousHash">
          <p className="f5">Previous Hash</p>
          <p className="f5"style={this.colorPreviousHash(this.state.previousHash)}>{this.state.previousHash}</p>
        </div>


       <div className="hashes">
         <p className="f5" id="presentHash">Hash</p>
         <p className="f5 br2 underline"id="present" style={this.colorHash(this.state.hash)}>{this.state.hash}</p>
       </div>


           <div className="input-group mb-3">
           <div className="grid3">
             <p className="blockOrder f2 title pa2">{this.renderGenBlock()}</p>
             <p className="blockDate f5">on {this.state.date}</p>
           </div>
           <div className='ph5'>
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
