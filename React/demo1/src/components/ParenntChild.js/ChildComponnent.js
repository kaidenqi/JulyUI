import React from 'react'

function ChildComponnent(props) {
    return (
        <>
            <button onClick={()=>props.greetHandler('Child')}>Greet to Parent</button>
        </>
    )
}

export default ChildComponnent
