import React from 'react';
import Person from './Person';

function Namelist(){
    const persons=[
        {
            id:1,
            name:'Ria',
            age:21,

        },
        {
            id:2,
            name:'Navpreet',
            age:20,
        }
    ]
    const personList= persons.map(person =>(
        <Person person={person}> </Person>
    ))
  return <div>{personList}</div>
}
export default Namelist;