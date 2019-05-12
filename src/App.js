import React from 'react';
import Roundlogo from './components/RoundLogo/roundlogo.js';
import GenesisBlock from './components/GenesisBlock/GenesisBlock.js';
import AddCard from './components/AddCard/AddCard.js';
import './App.css';

const sha256 = require('sha256');

const initialState = {
  block: {
    id: 'GENESIS BLOCK',
    previousHash : 0,
    hash : sha256(0),
    dayCreated : new Date().toGMTString(),
    data: '  Welcome to the Blockchain!'
  }
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
    console.log(this.state.block.id, 'initial ID');
    if (this.state.block.id === 'GENESIS BLOCK') {
      this.setState(Object.assign(this.state.block, {id: 0}));
      // this.setState({block: { ...this.state.block, id: 0}});
    }


    console.log(this.state.block.id, '  changed state');

  this.setState({
    block: {
      id: this.state.block.id++,
      previousHash : this.state.block.hash,
      hash : sha256(this.state.block.data + this.state.block.id + this.state.block.previousHash),
      dayCreated : new Date().toGMTString(),

    }
  })
    console.log(this.state.block.id);

}


  render() {
    const {id, previousHash, hash, dayCreated, data} = this.state.block;
  return (
    <div>
      <Roundlogo />
      <div className='title'>BLOCKCHAIN</div>
      {/*<GenesisBlock previousHash='0' blockNum='GENESIS BLOCK'/> */}
      <GenesisBlock
        id={id}
        previousHash={previousHash}
        hash={hash}
        dayCreated={dayCreated}
        data={data} />
      <AddCard onButtonClick={this.onButtonClick} />

      {

        <div>

        </div>

      }


      {/*{
        <BlockCard />}
      */}
    </div>
  );
}
}

export default App;
