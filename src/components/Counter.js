import React, { useState } from "react";
// useState will return an array that has two variables inside of it:

// count: a reference to the current value of that state in React's internals
// setCount: a setter function so we can update that state

function Counter() {
  //   const countState = useState(0);
  // // => [0, setStateFunction]
  // const count = countState[0];
  // const setCount = countState[1];

const [count, setCount] = useState(0);

  function increment() {
    // Update the value of count in React's internal state to be count + 1
    // Re-render our component
    setCount(count => count + 1);
    setCount(count => count + 1);
  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
