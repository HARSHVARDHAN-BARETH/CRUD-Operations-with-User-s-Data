import React,  { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import "./App.css"


function UpdateUser() {
  const {id} = useParams();
  const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();
    useEffect(()=>{
      axios.get("http://localhost:8000/getUser/"+id)
      .then(result=> {console.log(result)
        setName(result.data.name)
        setAge(result.data.age)
        setEmail(result.data.email)
      })
      .catch(err=>console.log(err))
  }, [])

  const update = (e)=>{
    e.preventDefault();
    axios.put("http://localhost:8000/updateUser/"+id, {name, email, age})
    .then(result=>  console.log(result) , navigate("/") )
    .catch(err=>console.log(err))
  }

  return (
    <div className='container'>
      <form onSubmit={update}>
        <h2>Update User</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=>{setName(e.target.value)}} value={name}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e)=>{setEmail(e.target.value)}} value={email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e)=>{setAge(e.target.value)}} value={age}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Update
          </button>
          <Link to="/" className="btn btn-primary">View</Link>
      </form>
    </div>
  )
}

export default UpdateUser
