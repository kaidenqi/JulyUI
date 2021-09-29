import React, {useState} from 'react'

export default function App1() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>You clicked {count} times!</h1>
            <button onClick={()=>{
                setCount(count+1)
            }}>Click me to add 1</button>
        </>
    )
}

