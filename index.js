const express = require('express');
const app = express()
const port = process.env.PORT || 3002;
app.get('/',(req,res) => {
  res.send('Hello')
})
app.listen(3001,()=>{
  console.log("App runs on port 3001")
})