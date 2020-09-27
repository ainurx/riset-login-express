'use strict'
const mysql = require('mysql')

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'riset-login-express'
})

conn.connect(err=>{
  if(err) throw err
  console.log("Database aman")
})

module.exports = conn