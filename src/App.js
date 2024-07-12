
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
   
 
  // const inputRef = useRef(null); 
  // const resultRef = useRef(null); 
  // const formRef = useRef();
  // const [result, setResult] = useState(0);
  // //const [input, setInput] = useState(0);
 
  // function plus(e) {
  //   e.preventDefault();
  // //  setResult((result) => result + Number(input))
  //  // formRef.current.reset();
  //   setResult((result) => result + Number(inputRef.current.value))
  // };
 
  // function minus(e) { 
  //   e.preventDefault(); 
  //   setResult((result) => result - Number(inputRef.current.value));
  //  // formRef.current.reset();
  // };
 
  // function times(e) { 
  //   e.preventDefault(); 
     
  //   if(result === 0){
  //     setResult((result) =>  Number(inputRef.current.value));
  //   } else {
  //     setResult((result) =>  result * Number(inputRef.current.value));
  //   }
      
    
   
  //  // formRef.current.reset();
    
  // }; 
 
  // function divide(e) { 
  //   e.preventDefault(); 
  //   if(result === 0){
  //     setResult((result) =>  Number(inputRef.current.value));
  //   } else {
  //     setResult((result) =>  result / Number(inputRef.current.value));
  //   }
      
  //  // formRef.current.reset();
  // };
 
  // function resetInput(e) {
  //   e.preventDefault(); 
  //  //setInput(null);
  //   formRef.current.reset();
  // };
  
 
  // function resetResult(e) { 
  //    e.preventDefault(); 
  //  setResult(0);
  //   //formRef.current.reset();
  // };
  
  
 
  // return ( 
  //   <div className="App"> 
  //     <div> 
  //       <h1>Simplest Working Calculator</h1> 
  //     </div> 
  //     <form ref ={formRef}>
  //       <p ref={resultRef}> 
  //         {result} 
  //       </p>
  //       <input
  //         pattern="[0-9]" 
  //         ref={inputRef}
  //         type="number" 
  //         placeholder="Type a number"
  //        // onChange = { e => setInput(e.target.value)}
  //       />
  //       <button onClick={plus}>add </button>
  //       <button onClick={minus}>substract</button>
  //       <button onClick={times}>multiply</button>
  //       <button onClick={divide}>divide</button>
  //       <button onClick={resetInput}>reset input</button>
  //       <button onClick={resetResult}>reset result</button>
  //     </form> 
  //   </div> 
  // ); 

}
export default App; 
