
import { useState } from 'react';
import './App.css';
import Square from './Square';


function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value = {square[0]}/>
        <Square value = {square[1]}/>
        <Square value = {square[2]}/> 
      </div>
      <div className="board-row">
      <Square value = {square[3]}/>
      <Square value = {square[4]}/>
      <Square value = {square[5]}/>
        
        {/* <button className='square'>
          1
        </button> */}
         {/* <Square value = {2}/>
         <Square value = {3}/> */}
        
      </div>
      <div className="board-row">
      <Square value = {square[6]}/>
      <Square value = {square[7]}/>
      <Square value = {square[8]}/>
        
        {/* <button className='square'>
          1
        </button> */}
         {/* <Square value = {2}/>
         <Square value = {3}/> */}
        
      </div>
    </>
    
    
    
  );
}

export default App;
