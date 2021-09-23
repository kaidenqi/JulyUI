import React, { Component } from 'react'
import ChildComponnent from './ChildComponnent'

class ParentComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            parentName:'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(child){
        alert(`Greeting ${this.state.parentName} from ${child}`)
    }


    render() {
        return (
            <>
                <ChildComponnent greetHandler={this.greetParent}></ChildComponnent>
            </>
        )
    }
}

export default ParentComponent
