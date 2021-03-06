const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000 

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
  res.send('Riset API Login')
})

const userRoutes = require('./src/route/userRoute')
const artikelRoute = require('./src/route/artikelRoute')

app.use('/api/', userRoutes)
app.use('/api/', artikelRoute)

app.listen(PORT, ()=>{
  console.log(`Running on ${PORT}`)
})