import React, { Fragment } from 'react'
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';


export default function Home() {
    let history = useNavigate();

    const handleEdit = (id, name, age)=>{
        localStorage.setItem('Name',name)
        localStorage.setItem('Age',age)
        localStorage.setItem('Id0 ',id)
    } 



    const handleDelete = (id)=>{
        let index = Employees.map(function(e){
            return e.id
        }).indexOf(id);

        let voir = Employees.splice(index,1)
        console.log(voir)
        history("/")
    }
  return (
    <div>
      <h1>c'est le home page</h1> 
        <div>
            <table cellPadding={"0"} cellSpacing={"0"}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Employees && Employees.length >0
                    ?
                    Employees.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>
                                    <Link to={'/edit'}>
                                        <button onClick={()=>{handleEdit(item.id, item.Name, item.Age)}}>Edit</button>
                                    </Link>
                                    &nbsp;
                                    <Link>
                                        <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    }):"No data"
                    }
                </tbody>
            </table>
            <Link to={'/create'}>
                <button>Create</button>
            </Link>  
        </div> 
    </div>
  )
}
 