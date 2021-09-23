import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
        //why the call to the super
        super(props)
        this.state = {
             message:'memo'
        }
        this.changeMessage = this.changeMessage.bind(this)
        //类方法默认没有绑定this,所以在这里绑定一下
    }
    //dont have to bind the this keywork
   


    changeMessage =()=>{
        this.setState({
            message: 'memo2'
        })
     }
    render() {
        console.log("Re-render!")
        return (
            <>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>Change Message</button>
            </>
        )
    }
}

export default Message;
