'use strict'

const Artikel = require('../model/artikelModel')
const User = require('../model/userModel')

exports.findAll = (req, res)=>{
  Artikel.findAll((err, artikel)=>{
    if(err) res.send(err)
    res.send(artikel)
  })
}

exports.findById = (req, res)=>{
  Artikel.findById(req.params.id, (err, artikel)=>{
    if(err) res.send(err)
    res.send(artikel)
  })
}

exports.create = (req, res)=>{
  const newArtikel = new Artikel(req.body)

  if(req.body.constructor === Object && Object.keys(req.body).length===0){
    res.status(400).send({
      error: true,
      message: 'isi data'
    })
  }
  else{
    Artikel.create(newArtikel, (err, artikel)=>{
      if(err) res.send(err)
      res.json({
        error: false,
        message: 'artikel terinput',
        data: artikel
      })
    })
  }
}

exports.update = (req, res)=>{
  const newData = new Artikel(req.body)
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({
      error: true,
      message: 'isi data'
    })
  }
  else{
    Artikel.update(req.params.id, newData, (err, artikel)=>{
      if(err) res.send(err)
      res.json({
        error: false,
        message: 'data berhasil diupdate'
      })
    })
  }
}

exports.delete = (req, res)=>{
  Artikel.delete(req.params.id, (err, artikel)=>{
    if(err){
      console.log(`error: ${err}`)
      res.send(err)
    }
    else{
      res.json({
        error: false,
        message: `artikel id ${req.params.id} deleted`
      })
      // res.send(`${artikel[0].judul} deleted`)
    }
  })
}