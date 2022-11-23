
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from "./App/counterSlice";

function App() {
  
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();



  return (
    <div className="App">
     <h1> Add Number</h1>

    <div className="App-wrapper">
      
         <button   onClick={() => dispatch(increment())}  >Increment +</button>
           <input name="Counter" placehoder={count} ></input>
          
         <button  onClick={() => dispatch(decrement())}  >Decrement -</button>

    </div>
    <h1>{count}</h1>
    </div>
  );
}

export default App;
