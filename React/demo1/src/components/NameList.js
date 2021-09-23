import React from 'react'
import Person from './Person';

function NameList() {

    // const names = ["Mary", "Mike", "Adam", "Kaiden"];
    // const nameList = names.map(name=>
    //     {return (<h1>{name}</h1>)}  
    // )

    const persons = [
        {
            id:1,
            name:"Adam",
            age:25
        },
        {
            id:2,
            name:"Mike",
            age:22
        }
    ];

    const personList = persons.map(person=>
        <Person key={person.id} person={person}></Person>
        );


    return (
        <>
            {personList}
        </>
    )
}

export default NameList
