import React from 'react';
import Roundlogo from './components/RoundLogo/roundlogo.js';
import GenesisBlock from './components/GenesisBlock/GenesisBlock.js';
import AddCard from './components/AddCard/AddCard.js';
import './App.css';

const sha256 = require('sha256');

const initialState = {
    blockId: 'GENESIS BLOCK',
    previousHash : 0,
    hash : sha256(Math.random()),
    dayCreated : new Date().toGMTString(),
    data: '  Welcome to the Blockchain!',
    blocks : []

};



class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

componentDidMount() {

}

onButtonClick = () => {
    console.log(this.state.blockId, 'initial ID');
    this.setState({})

this.setState({blocks: [...this.state.blocks, [this.state.blockId, this.state.previousHash, this.state.hash, this.state.dayCreated] ]});

  this.setState({

      blockId: this.state.blockId++,
      previousHash : this.state.hash,
      hash : sha256(this.state.data + this.state.blockId + this.state.previousHash),
      dayCreated : new Date().toGMTString(),


  })
    console.log(this.state.blockId);



console.log(this.state.blocks);

}


  render() {
    const {blockId, previousHash, hash, dayCreated, data} = this.state;
console.log(hash);
console.log(blockId);
  return (

    <div>
      <Roundlogo />
      <div className='title'>BLOCKCHAIN</div>

      <GenesisBlock
        blockId={blockId}

        hash={hash}
        dayCreated={dayCreated}
        data={data} />
      {
        this.state.blocks.map((blockMap, index) => {
          return (
            <div key={index} className='container'>
              <div className="block-card">
                <div className="card_body">
                  <div className="data"><div className="dataBox">DATA</div><input type="text" name="" placeholder="" defaultValue="    Welcome to Blockchain Demo 2.0!" /></div>
                  <div style={{display:'flex', height: '30px'}}><p>PREVIOUS HASH</p> <p style={{marginLeft: '12px', color: 'green', fontSize: '10px', marginTop: '10px'}}>{blockMap[1]}</p></div>
                  <div style={{display: 'flex'}}><p>HASH</p><div className='ant-tag-green'>{blockMap[2]}</div></div>
                  <div style={{display: 'flex', marginTop: '24px'}}><span style={{fontSize: '24px', letterSpacing: '1px'}}>{`BLOCK # ${index + 1}`}</span><div className='time time-genesis'>on {blockMap[3]}</div></div>
                </div>
              </div>
            </div>
          )
        })
      }

      <AddCard onButtonClick={this.onButtonClick} />

    </div>
  );
}
}

export default App;
