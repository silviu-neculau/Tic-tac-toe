import React, { ChangeEventHandler, useState } from 'react';
import './App.css';

function App() {
  interface player{
    playerOne:number,
    playerTwo:number,
    playerUnasigned:number
  }
  const[player,setPlayer]=useState<number>(0);
  
  const board=[player,player,player,
    player,player,player,
    player,player,player];  
    
const changePlayer=(player:number)=>{
  if (player === 0)
  setPlayer(1);
  console.log("apasat");
}




  return (
    <div className="App">
     <div className="gameBoard"> 
      <button className="cell" onClick={()=>changePlayer(player)}>1</button>
      <button className="cell" onClick={()=>changePlayer(player)}>2</button>
      <button className="cell" onClick={()=>changePlayer(player)}>3</button>
      <button className="cell" onClick={()=>changePlayer(player)}>4</button>
      <button className="cell" onClick={()=>changePlayer(player)}>5</button>
      <button className="cell" onClick={()=>changePlayer(player)}>6</button>
      <button className="cell" onClick={()=>changePlayer(player)}>7</button>
      <button className="cell" onClick={()=>changePlayer(player)}>8</button>
      <button className="cell" onClick={()=>changePlayer(player)}>9</button>

     </div>
    </div>
  );
}

export default App;
