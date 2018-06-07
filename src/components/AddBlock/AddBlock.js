import React from 'react';
import './AddBlock.css';

const AddBlock = ({addBlock, addData, data})=>{
  return(
    <div className="card text-center ma4 center br3 shadow-5" style={{width:'600px'}}>

    <div className="card-body">
      <h5 className="card-title">Create New Block</h5>
      <div className="form-row">
      <div className="form-group col-md-2">
        <p className="form-control bg-purple white">Data</p>
      </div>
      <div className="form-group col-md-10">
        <input type="text" className="form-control" value={data} onChange={addData} placeholder="Enter Data to Mine"/>
      </div>
      </div>
      <button className="card-add f5 grow no-underline br-pill ph4 pv3 pointer dib white" onClick={addBlock}> + Add New Block </button>
    </div>

  </div>

  );
}




export default AddBlock;
