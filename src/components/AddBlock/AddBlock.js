import React from 'react';
import './AddBlock.css';

const AddBlock = ({addBlock, addData, data})=>{
  return(
    <div class="card text-center ma4 center">

    <div class="card-body">
      <h5 class="card-title">Create New Block</h5>
      <div class="form-row">
      <div class="form-group col-md-2">
        <p type="email" class="form-control">Data</p>
      </div>
      <div class="form-group col-md-10">
        <input type="text" class="form-control" value={data} onChange={addData} placeholder="Enter Data to Mine"/>
      </div>
      </div>
      <button class="btn btn-primary dim grow" onClick={addBlock}>Add</button>
    </div>

  </div>

  );
}




export default AddBlock;
