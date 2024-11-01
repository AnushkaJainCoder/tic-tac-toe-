
import './App.css';
import Square from './Square';


function App() {
  return (
    <>
      <div className="board-row">
        <Square value = {1}/>
        {/* <button className='square'>
          1
        </button> */}
         <Square value = {2}/>
         <Square value = {3}/>
        
      </div>
      <div className="board-row">
        <Square value = {4}/>
        {/* <button className='square'>
          1
        </button> */}
         <Square value = {5}/>
         <Square value = {6}/>
        
      </div>
      <div className="board-row">
        <Square value = {7}/>
        {/* <button className='square'>
          1
        </button> */}
         <Square value = {8}/>
         <Square value = {9}/>
        
      </div>
    </>
    
    
    
  );
}

export default App;
