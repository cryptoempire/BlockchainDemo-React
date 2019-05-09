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
            <div style={{display:'flex'}}><p>PREVIOUS HASH</p> <p style={{marginLeft: '12px', color: 'green', fontSize: '10px', marginTop: '10px'}}>0</p></div>
            <div><p>HASH</p></div>
            <div style={{display: 'flex'}}><span style={{font: '24px'}}>GENESIS BLOCK</span><div className='time time-genesis'>on {time}</div></div>
          </div>
        </div>
      </div>
    </div>
      );
      };

      export default GenesisBlock;
