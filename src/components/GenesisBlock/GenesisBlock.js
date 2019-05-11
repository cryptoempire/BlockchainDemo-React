import React, {Component} from 'react';
import './GenesisBlock.css';

const sha256 = require('sha256');

let time =  new Date().toGMTString();

let hash = sha256(Math.random());

const GenesisBlock = () => {
  return (
    <div>
      <div className='container'>
        <div className="block-card">
          <div className="card_body">
            <div className="data"><div className="dataBox">DATA</div><input type="text" name="" placeholder="" defaultValue="Welcome to Blockchain Demo 2.0!" /></div>
            <div style={{display:'flex', height: '30px'}}><p>PREVIOUS HASH</p> <p style={{marginLeft: '12px', color: 'green', fontSize: '10px', marginTop: '10px'}}>0</p></div>
            <div style={{display: 'flex'}}><p>HASH</p><div className='ant-tag-green'>{hash}</div></div>
            <div style={{display: 'flex', marginTop: '24px'}}><span style={{fontSize: '24px', letterSpacing: '1px'}}>GENESIS BLOCK</span><div className='time time-genesis'>on {time}</div></div>
          </div>
        </div>
      </div>
    </div>
      );
      };

      export default GenesisBlock;
