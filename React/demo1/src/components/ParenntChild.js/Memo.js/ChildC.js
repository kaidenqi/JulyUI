import React, { Component } from 'react'

export class ChildC extends Component {
    render() {
        console.log("Regular Component")
        return (
            <div>
                Regular Component {this.props.name} <br></br>
            </div>
        )
    }
}

export default React.memo(ChildC)
