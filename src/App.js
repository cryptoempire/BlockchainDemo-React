import React from 'react';
import Roundlogo from './components/RoundLogo/roundlogo.js';
import GenesisBlock from './components/GenesisBlock/GenesisBlock.js';
import AddCard from './components/AddCard/AddCard.js';
import './App.css';

const sha256 = require('sha256');

const initialState = {
   blocks : [ ]
};


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      block: {
        id: 'GENESIS BLOCK',
        previousHash : 0,
        hash : sha256(0),
        dayCreated : new Date().toGMTString(),
        data: '  Welcome to the Blockchain!'
      }
    }
  }

createBlock = () => {

}

onButtonClick = () => {
  console.log('clicked');


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
