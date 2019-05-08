import React, {Component} from 'react';
import './AddCard.css';

const AddCard = () => {
  return (
    <div>
      <div class="container">
        <div class="addBlock">
          <div class="container"><input id='dataInput' type="text" name="" placeholder="DATA" /></div>
          <div class="container">
              <button id='enter'>ADD NEW BLOCK +</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddCard;
