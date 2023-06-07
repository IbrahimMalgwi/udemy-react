import React from 'react'
import "../Counter.css"; 

const Counter = () => {
  return (
    <>
      <div className="counter_parent">
        <div className="main-div">
          <h3>Counter </h3>
          <button>0</button>
        </div>
      </div>
    </>
  );
}

export default Counter