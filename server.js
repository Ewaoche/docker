const express = require('express');
const DbConnect = require("./database/db");
const app = express();
const User = require('./model/User'); 

DbConnect();

app.get("/check",async(req,res)=>{
  const users = await User.find();
  res.status(200).json({
    message:"successfully gotten datas",
    data:users,
    value:process.env.VALUE
  })
});





const PORT=process.env.PORT 

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})