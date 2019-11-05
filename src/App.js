import React, { useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { CSSTransition } from 'react-transition-group';


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
  const [showModal, toggleModal] = useState(false);
  const [showBlock, toggleBlock] = useState(false);


  return (
    <div className="App">
      Counter: {number}
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
      <button onClick={() => { toggleBlock(!showBlock) }} >show block</button>
      <button onClick={() => {toggleModal(!showModal)}}>Show modal</button>

              <Portal showModal={showModal} toggleModal={toggleModal} children={<div>hello there</div>} maxWidth={500}/>
    </div>
  );
}

export default App;


function Portal ({ toggleModal, showModal, children, maxWidth }) {
  return  ReactDOM.createPortal(
    <CSSTransition  in={showModal} timeout={500} classNames="alert" mountOnEnter unmountOnExit>
    <div className="my_modal" onClick={() => {toggleModal(!showModal)}}>
        <div style={{width: maxWidth && maxWidth}} className="modal_body" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </CSSTransition>
    ,
    document.body)
}
