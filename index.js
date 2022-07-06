const express = require('express');
const app = express()

app.get('/',(req,res) => {
  res.send('Hello')
})
app.listen(3001,()=>{
  console.log("App runs on port 3001")
})