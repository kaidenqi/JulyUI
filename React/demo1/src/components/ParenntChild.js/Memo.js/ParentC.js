import React, { Component } from 'react'
import ChildC from './ChildC'


class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"John"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"John"
            })
        }, 2000)
    }
   
    render() {
        console.log('***************************Parent Component********************')
        return (
            <div>
                Parent Component<br></br>
                <ChildC name={this.state.name}/>
                
            </div>
        )
    }
}

export default ParentComp