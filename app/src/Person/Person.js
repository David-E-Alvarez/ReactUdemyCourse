import React from 'react';

const person = (props) => {//ES6
    return(
        <>
        {console.log("props: ", props)}
        <div>
            <p>Hi! My name is {props.name} and I'm {props.age} years old.</p>
            <p>{props.children}</p>
        </div>
        </>
    )
}

export default person;