
import { useState } from 'react';
import './App.css';
import Square from './Square';
import DecideWinner from './DecideWinner';
//  from './DecideWinner';


function App() {
  
  const [isX, setX] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));
  const winner = DecideWinner(square);
  let status;

  if(winner){
    status = "Congratulation, Winner is " + winner;
  }
  else{
    status = "Next Player is " + (isX ? 'X' : 'O')
  }

  function onhandleClick(i){
    if(square[i] || DecideWinner(square)){
      return;
    }
    const nextSquares = square.slice();
    if(isX){
      nextSquares[i] = 'X';
    }
    else{
      nextSquares[i] = 'O';
    }
    // nextSquares[i] = 'X';
    setSquare(nextSquares);
    setX(!isX);
    
  }
  return (
    <>
      <div className="board-row"> 
        <Square value = {square[0]} onSquareClick = {() => onhandleClick(0)}/>
        <Square value = {square[1]} onSquareClick = {() => onhandleClick(1)}/>
        <Square value = {square[2]} onSquareClick = {() => onhandleClick(2)}/> 
      </div>
      <div className="board-row">
        <Square value = {square[3]} onSquareClick = {() => onhandleClick(3)}/>
        <Square value = {square[4]} onSquareClick = {() => onhandleClick(4)}/>
        <Square value = {square[5]} onSquareClick = {() => onhandleClick(5)}/>
        
        {/* <button className='square'>
          1
        </button> */}
         {/* <Square value = {2}/>
         <Square value = {3}/> */}
        
      </div>
      <div className="board-row">
      <Square value = {square[6]} onSquareClick = {() => onhandleClick(6)}/>
      <Square value = {square[7]} onSquareClick = {() => onhandleClick(7)}/>
      <Square value = {square[8]} onSquareClick = {() => onhandleClick(8)}/>
        
        {/* <button className='square'>
          1
        </button> */}
         {/* <Square value = {2}/>
         <Square value = {3}/> */}
        
      </div>
      <div className='status'>
          {status}
      </div>
    </>
    
    
    
  );
}

export default App;
