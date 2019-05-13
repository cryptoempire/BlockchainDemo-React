import React from 'react';
import Roundlogo from './components/RoundLogo/roundlogo.js';
import GenesisBlock from './components/GenesisBlock/GenesisBlock.js';
import AddCard from './components/AddCard/AddCard.js';
import './App.css';

const sha256 = require('sha256');

const initialState = {
      blockId: 'GENESIS BLOCK',
    previousHash : 0,
    hash : sha256(0),
    dayCreated : new Date().toGMTString(),
    data: '  Welcome to the Blockchain!',
    blocks : []

};



class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

createBlock = () => {

}


onButtonClick = () => {

    console.log('clicked');
    console.log(this.state.blockId, 'initial ID');
    if (this.state.blockId === 'GENESIS BLOCK') {
      this.setState({blockId : 0});
    }


    console.log(this.state.blockId, '  changed state');

  this.setState({

      blockId: this.state.blockId++,
      previousHash : this.state.hash,
      hash : sha256(this.state.data + this.state.blockId + this.state.previousHash),
      dayCreated : new Date().toGMTString(),


  })
    console.log(this.state.blockId);


}


  render() {
    const {blockId, previousHash, hash, dayCreated, data} = this.state;
  return (
    <div>
      <Roundlogo />
      <div className='title'>BLOCKCHAIN</div>
      {/*<GenesisBlock previousHash='0' blockNum='GENESIS BLOCK'/> */}
      <GenesisBlock
        id='genesis'
        blockId={blockId}
        previousHash={previousHash}
        hash={hash}
        dayCreated={dayCreated}
        data={data} />
      <AddCard onButtonClick={this.onButtonClick} />

      {

      Object.values(this.state.blocks).map(item => {
        return console.log(item);


      })

      }


      {/*{
        <BlockCard />}
      */}
    </div>
  );
}
}

export default App;
