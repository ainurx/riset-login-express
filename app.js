const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000 

app.get('/', (req, res)=>{
  res.send('Riset API Login')
})

app.listen(PORT, ()=>{
  console.log(`Running on ${PORT}`)
})