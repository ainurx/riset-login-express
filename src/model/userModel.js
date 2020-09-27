'use strict'
const conn = require('../../config/database')

const User = function(user){
  this.username = user.username
  this.password = user.password
  this.nama = user.nama
}

User.findAll = (result)=>{
  conn.query("select * from user", (err, res)=>{
    if(err){
      console.log(`Error: ${err}`)
      result(null, err)
    } 
    else{
      result(null, res)
    }
  })
}

User.findByID = (id, result)=>{
  conn.query(`SELECT * from user WHERE id= ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

User.create = (newUser, result)=>{
  conn.query(`INSERT INTO USER SET ?`, newUser, (err, res)=>{
    if(err){
      console.log(`Error: ${err}`)
      result(null, err)
    }
    else{
      console.log(`res: ${res.insertId}`)
      result(null, res.insertId)
    }
  })
}

User.update = (id, user, result)=>{
  conn.query('UPDATE user SET username= ?, password=?, nama= ? WHERE id= ?', [
    user.username, user.password, user.nama, id
  ], (err, res)=>{
    if(err){
      result(null, err)
    }
    else{
      result(null, res)
    }
  })  
}

User.delete = (id, result)=>{
  conn.query(`DELETE FROM user WHERE ID = ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

User.auth = (username, password, result)=>{
  conn.query('SELECT * FROM user WHERE username= ?', username, (err, res)=>{
    if(err){
      console.log(`Error: ${err}`)
      result(null, err)
    }
    else{
      result(null, res)
    }
  })
}

module.exports = User