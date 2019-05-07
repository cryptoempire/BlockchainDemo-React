import React from 'react';
import logo from './logo.svg';
import Roundlogo from './components/RoundLogo/roundlogo.js';
import './App.css';

class App extends React.Component {
  render() {
  return (
    <div>
      <Roundlogo />
      <div className='title'>Blockchain</div>
      {/*{
        <GenesisBlockCard />
        <AddCard />
        <BlockCard />}
      */}
    </div>
  );
}
}

export default App;
