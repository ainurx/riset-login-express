'use strict'

const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(10)
const User = require('../model/userModel')

exports.findAll = (req, res)=>{
  User.findAll((err, user)=>{
    if (err){
      res.send(err)
    }
    else{
      res.send(user)
    }
  })
}

exports.findById = (req, res)=>{
  User.findByID(req.params.id, (err, user)=>{
    if(err) res.send(err)
    res.send(user)
  })
}

exports.create = (req, res)=>{
  const new_user = new User(req.body)

  if(req.body.constructor === Object && Object.keys(req.body).length===0){
    res.status(400).send({
      error: true,
      message: "isi data"
    })
  }
  else{
    new_user.password = bcrypt.hashSync(new_user.password, salt)
    User.create(new_user, (err, user)=>{
      if(err) res.send(err)
      res.json({
        error: false,
        message: 'data terinput',
        data: user
      })
    })
  }
}

exports.update = (req,res)=>{
  const newUser = new User(req.body)
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({
      error: true,
      message: 'isi yang lain'
    })
  }
  else{
    newUser.password = bcrypt.hashSync(newUser.password, salt)
    User.update(req.params.id, newUser, (err, user)=>{
      if(err) res.send(err)
      res.json({
        error: false,
        message: 'data berhasil diupdate'
      })
    })
  }
}

exports.delete = (req, res)=>{
  User.delete(req.params.id, (err, user)=>{
    if(err){
      console.log(`Error: ${err}`)
      res.send(err)
    }
    else{
      res.json({
        error: false,
        message: 'User deleted'
      })
    }
  })
}

exports.auth = (req, res)=>{
  const username = req.body.username
  const password = req.body.password

  if(req.body.constructor === Object && Object.keys(req.body).length===0){
    res.status(400).send({
      error: true,
      message: 'isi username & password'
    })
  }
  else{
    User.auth(username, password, (err, user)=>{
      if(err){
        res.send(err)
      } 
      else{
        const hash = user[0].password

        const comparing = bcrypt.compareSync(password, hash)
        if(comparing){
          res.send(`berhasil login...hi ${user[0].nama}`)    
        }
        else{
          res.send('gagal')
        }
      }
    })
  }
}
