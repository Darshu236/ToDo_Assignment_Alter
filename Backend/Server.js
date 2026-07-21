require('dotenv').config()
const express = require("express");
const cors=require("cors");
const mongoose=require("mongoose");

const {taskRoute} = require("./router/taskRouter.js").default
const {userRoute} = require('./route/userRoute.js').default

const app=express()
const PORT=process.env.PORT||5000

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("Database connected"))
    .catch((err)=>console.log("Database is not connected",err))

app.use(cors()); 
app.use(express.json()); 

app.use('/api/tasks', taskRoute);
app.use('/api/tasks', userRoute);


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})



