import React, { useState } from 'react';
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid'

export default function Add() {
    const [name , setName] = useState("");
    const [age , setAge] = useState("");
    let history = useNavigate();
    //comportement
    const handleSubmit = (e)=>{
        e.preventDefault();
        const ids = uuid();
        // const ids = new Date().getTime();
        console.log(ids);
        let uniqueId = ids.slice(0,8);
        console.log(uniqueId);

        let a = name , b=age;
        Employees.push({id:uniqueId, Name:a, Age:b})
        alert('enregistrer avec succès');
        history('/')
    }
  return (
    <div>
        <h1>c'est le components Add</h1>
        <form action="">
            <label htmlFor="name">Nom</label>
            <input type="text" placeholder='entrer le nom' id='name' name='name' required
                onChange={(e)=>setName(e.target.value)}
            /> &nbsp;
            <label htmlFor="age">Age</label>
            <input type="text" placeholder="entrer l'age" id='age' name='age' required
                onChange={(e)=> setAge(e.target.value)}
            />
            <button onClick={(e)=>handleSubmit(e)} type="submit">Submit</button>
        </form>
    
    </div>
  )
}
