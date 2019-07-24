import React, { useReducer } from 'react';
import './App.css';

function App() {

  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment" :
        return state + 1;
      case "Decrement" :
        return Math.max(0,state - 1);
      case "Reset" :
        return state = 0
    }
  };

  const [number, dispatch] = useReducer(reducer, 0)

  return (
    <div className="App">
      Counter: {number}
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
    </div>
  );
}

export default App;
