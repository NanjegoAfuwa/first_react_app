import React from 'react';
import './Greet.css';


function Greet({ name, age, school, address}){
    console.log(name, 'name')
    console.log(age, 'age')
    console.log(school, 'school')
    console.log(address, 'address')
    return(
        <div className='greeting_cards'>
            <h1> Hello my name is {name}</h1>
            <p>I am {age} years old</p>
            <p>My school is {school}</p>
            <p>I live at {address}</p>
        </div>
    )
}
export default Greet;