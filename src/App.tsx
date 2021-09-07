import React, { ChangeEventHandler, useState } from 'react';
import './App.css';

function App() {
const[player,setPlayer]=useState<number>(0);

const changePlayer = (player:number) =>{
  if(player === 0)
  setPlayer(1);  
}

  return (
    <div className="App">
     <div className="gameBoard"> 
      <div className="cell">1</div>
      <div className="cell">2</div>
      <div className="cell">3</div>
      <div className="cell">4</div>
      <div className="cell">5</div>
      <div className="cell">6</div>
      <div className="cell">7</div>
      <div className="cell">8</div>
      <div className="cell">9</div>
     </div>
    </div>
  );
}

export default App;
