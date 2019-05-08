import React from 'react';
import logo from './logo.svg';
import Roundlogo from './components/RoundLogo/roundlogo.js';
import GenesisBlock from './components/GenesisBlock/GenesisBlock.js';
import AddCard from './components/AddCard/AddCard.js';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div>
      <Roundlogo />
      <div className='title'>Blockchain</div>
      <GenesisBlock/>
      <AddCard />
      {/*{
        <BlockCard />}
      */}
    </div>
  );
}
}

export default App;
