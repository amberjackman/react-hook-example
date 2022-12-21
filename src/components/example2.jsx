import React from "react";

// class Example1 extends React.Component{
//   state = {count: 0};

//   render() {
//     const {count} = this.state;
    
//     return (
//       <div> 
//         <p> you clicked {count} times</p>
//         <button onClick={this.click}> click me</button>
//       </div>
//     );
//   }

//   click = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };
// }

export default function Example2() {

  const [count, setCount] = React.useState(0);

  return (
    <div> 
      <p> you clicked {count} times</p>
      <button onClick={click}> click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}