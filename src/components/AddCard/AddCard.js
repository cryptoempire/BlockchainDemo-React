import React, {Component} from 'react';
import './AddCard.css';

const AddCard = ({onButtonClick}) => {
  return (
    <div>
      <div className="container">
        <div className="addBlock">
          <div className="container"><input id='dataInput' type="text" name="" placeholder="DATA" /></div>
          <div className="container font">
              <button id='enter' onClick={onButtonClick}>ADD NEW BLOCK +</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddCard;
