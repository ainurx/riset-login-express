'use strict'
const mysql = require('mysql')

module.exports = conn.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'riset-login-express'
}).connect(err=>{
  if(err) throw err
  console.log("Database aman")
})