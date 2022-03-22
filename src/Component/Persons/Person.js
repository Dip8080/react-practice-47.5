import React, { useEffect, useState } from 'react';
import { addTolocal, removeFromLocal } from '../../Utilities/FakeDb';
import { multiplicaton, reducer } from '../Calculator/Calculator';
import ('./Person.css')
// it's always been key to set unique propety
const Person = () => {
    const [persons, setPersons] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data =>setPersons(data))
    },[])
    const total = reducer(persons);
    // console.log(total)
   
    return (
        <div className='parent'>
            {
                persons.map(x=><PersonDiv totAGe={total} object={x} key={x.id}></PersonDiv>)
            }
        </div>
    );
    
};

const PersonDiv = (props)=>{
    // console.log(props.object.age)
    const {name, age ,gender, id } = props.object;
    const totalAge = props.totAGe;
    console.log(totalAge)
    const handleId = (id)=>{
        addTolocal(id);
    }
    const handleRemove = (id)=>{
        removeFromLocal(id);
    }
    return(
        <div className='child'>
            <h4>{name} </h4>
            <h4>{age}{multiplicaton(30,3)}</h4>
            <p>and their total age is : {totalAge}</p>
            <h4>{gender}</h4>
            {/* handle functio with pera => onclick => function wrapper => {()=>funname(pera)} */}
            <button onClick={()=>handleId(id)}>add</button>
            <button onClick={()=>handleRemove(id)}> remove</button>

        </div>
    )
}

export default Person;