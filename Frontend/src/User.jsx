import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./User.css"
import "./App.css"

function User() {
  const [user, setUser] = useState([]);

  useEffect(()=>{
      axios.get("http://localhost:8000/")
      .then(result=> setUser(result.data))
      .catch(err=>console.log(err))
  }, [])

  const handleDelete = (id)=>{
    axios.delete("http://localhost:8000/deleteUser/"+id)
    .then((res)=>{console.log(res)
     window.location.reload()
    })
    .catch((err)=>console.log(err))
  }

  return (
    <div className="container">
        <div className="heading"><Link to="/create" className="btn btn-primary">Add+</Link>
        <h2>CRUD Operations with User's Data</h2></div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users, index) => (
            <tr>
              <th scope="row" key={users.id}>{index + 1}</th>
              <td>{users.name}</td>
              <td>{users.email}</td>
              <td>{users.age}</td>
              <td><button  className="btn btn-primary"><Link style={{color:"white", textDecorationLine: "none"}}
               to={`/update/${users._id}`}>update</Link></button>
               <button className="btn btn-danger" style={{color:"white", textDecorationLine: "none"}} onClick={(e)=>handleDelete(users._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
