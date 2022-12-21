import React from "react";


//useState => count
//useState => { count: 0 };

export default function Example2() {

  const [state, setState] = React.useState({ count: 0 });

  return (
    <div> 
      <p> you clicked {state.count} times</p>
      <button onClick={click}> click me</button>
    </div>
  );

  function click() {
    setState((state) => ({
      count: state.count + 1,
    }));
  }
}