import React from 'react';
import './AddBlock.css';

const AddBlock = ({addBlock, addData, data})=>{
  return(
    <div>
    <div className="card text-center ma4 center shadow-5" style={{width:'600px'}}>
    <div className='card-header animated fadeInLeft white bg-danger br3 shadow-5 f3 center' style={{width: '600px'}}>

    Create New Block
    </div>
    <div className="card-body">
      <div className="form-row">
      <div className="input-group mb-3">
      <div className='input-group-prepend'>
        <span className="input-group-text f4 bg-warning">Data</span>
      </div>
        <input type="text" className="form-control f4" value={data} onChange={addData} placeholder="Enter Data to Mine"/>
      </div>
      </div>
      <button className="card-add f4 grow no-underline br-pill ph3 pv2 pointer tc bg-purple dib white" onClick={addBlock}> + ADD </button>
    </div>

  </div>
  </div>
  );
}



export default AddBlock;
