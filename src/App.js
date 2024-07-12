
import {
  useState,
  useRef
} from "react"; 
import "./App.css";
import Calculator from './calculator';


function App() { 
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simplest Working Calculator</h1>
      </header>
      <Calculator></Calculator>
    </div>
  );

}
export default App; 
