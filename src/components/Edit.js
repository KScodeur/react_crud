import React, { useEffect,useState } from 'react'
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';
import {v4 as uuid} from 'uuid';

export default function Edit() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [id, setId] = useState("");

    let history = useNavigate();
    let index = Employees.map(function(e){
        return e.id 
    }).indexOf(id)

    //comportement
    const handleSubmit = (e)=>{
        e.preventDefault();
        let a = Employees[index];
        a.Name = name;
        a.Age = age;
        history('/')
    }
    useEffect(()=>{
        setName(localStorage.getItem('Name'));
        setAge(localStorage.getItem('Age'));
        setId(localStorage.getItem('Id'));
    },[])

    return (
    <div>Edit
        <form action="">
            <label htmlFor="name">Nom</label>
            <input type="text" placeholder='entrer le nom' id='name' value={name} required
                onChange={(e)=>setName(e.target.value)}
            /> &nbsp;
            <label htmlFor="age">Age</label>
            <input type="text" placeholder="entrer l'age" id='age' value={age} required
                onChange={(e)=> setAge(e.target.value)}
            />
            <button onClick={(e)=>handleSubmit(e)} type="submit">Update</button>
        </form>
    </div>
  )
}
