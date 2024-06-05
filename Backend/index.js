const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User")

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/mern')
  .then(() => console.log('Connected!'));
  
  app.listen(8000, ()=>{
      console.log("Server is running");
      
app.post("/createUser", (req, res, next)=>{
          UserModel.create(req.body)
          .then(users=>res.json(users))
          .catch(err=>res.json(err))
      })
})

app.get("/", (req, res, next)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})

app.get("/getUser/:id", (req, res)=>{
    const id  = req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})

app.put("/updateUser/:id", (req, res)=>{
    const id  = req.params.id;
    UserModel.findByIdAndUpdate({_id:id}, {name: req.body.name, email: req.body.email, age: req.body.age})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
})

app.delete("/deleteUser/:id", (req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then((res)=>res.json(res))
    .catch((err)=>res.json(err))
})