
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
    this.addCount = this.addCount.bind(this)
  }
  addCount(){
    this.setState({
      count:this.state.count+1
    });
  }
  
  render() {
    return (
      <>
        <h1>You clicked {this.state.count} times!</h1>
        <button onClick={this.addCount}>Click Me</button>
      </>
    )
  }
}

export default App
