import React from 'react';
import './AddBlock.css';

const AddBlock = ({addBlock, addData, data})=>{
  return(
    <div className="card text-center ma4 center br2 shadow-5" style={{width:'600px'}}>
    <div className='card-header white bg-info f4'>
    Create New Block
    </div>
    <div className="card-body">
      <div className="form-row">
      <div className="input-group mb-3">
      <div className='input-group-prepend'>
        <span className="input-group-text white bg-info">Data</span>
      </div>
        <input type="text" className="form-control" value={data} onChange={addData} placeholder="Enter Data to Mine"/>
      </div>
      </div>
      <button className="card-add f4 grow no-underline br-pill ph4 pv3 pointer bg-info dib white" onClick={addBlock}> + ADD </button>
    </div>

  </div>

  );
}




export default AddBlock;
