import React, {Component} from 'react';
import './GenesisBlock.css';

let time =  new Date().toGMTString();

const GenesisBlock = () => {
  return (
    <div>
      <div className='container'>
        <div class="block-card">
          <div class="card_body">
            <div class="data"><div class="dataBox">DATA</div><input type="text" name="" placeholder="" value="Welcome to Blockchain Demo 2.0!" /></div>
            <div><p>PREVIOUS HASH</p> </div>
            <div><p>HASH</p></div>
            <div style={{display: 'flex'}}><h2>GENESIS BLOCK</h2><div className='time time-genesis'>on {time}</div></div>
          </div>
        </div>
      </div>
      </div>
      );
      };

      export default GenesisBlock;
