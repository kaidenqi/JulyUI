import React from 'react'

function Person({person}) {
    return (
        <>
            <h1>{person.name} {person.age}</h1>
        </>
    )
}

export default Person
