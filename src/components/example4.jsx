import React from "react";

export default class Example1 extends React.Component{
  state = {count: 0};

  render() {
    const {count} = this.state;
    
    return (
      <div> 
        <p> you clicked {count} times</p>
        <button onClick={this.click}> click me</button>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount', this.state.count);
  }

  componentDidUpdate() {
    console.log('componentDidupdate', this.state.count);
  }

  click = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
}