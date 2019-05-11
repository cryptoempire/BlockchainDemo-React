import React from 'react';
import Roundlogo from './components/RoundLogo/roundlogo.js';
import GenesisBlock from './components/GenesisBlock/GenesisBlock.js';
import AddCard from './components/AddCard/AddCard.js';
import './App.css';

const sha256 = require('sha256');

const initialState = {
   blocks : [],
};


class App extends React.Component {
  constructor() {
    super();
  }

createBlock = () => {

}

onButtonClick = () => {
  console.log('clicked');


}


  render() {
  return (
    <div>
      <Roundlogo />
      <div className='title'>BLOCKCHAIN</div>
      <GenesisBlock/>
      <AddCard onButtonClick={this.onButtonClick}/>
      {/*{
        <BlockCard />}
      */}
    </div>
  );
}
}

export default App;
