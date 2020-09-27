'use strict'

const conn = require('../../config/database')

const table = 'artikel'

const Artikel = function(artikel){
  this.judul = artikel.judul
  this.isi = artikel.isi
}

Artikel.findAll = (result)=>{
  conn.query(`SELECT * FROM ${table}`, (err, res)=>{
    if(err){
      result(null, err)
    }
    else{
      result(null, res)
    }
  })
}

Artikel.findById = (id, result)=>{
  conn.query(`SELECT * FROM ${table} WHERE id = ${id}`, (err, res)=>{
    if(err){
      result(null, err)
    }
    else{
      result(null, res)
    }
  })
}

Artikel.create = (newArtikel, result)=>{
  conn.query(`INSERT INTO ${table} SET ?`, newArtikel, (err, res)=>{
    if(err) result(null, err)
    result(null, res.insertId)
  })
}

Artikel.update = (id, newData, result)=>{
  conn.query(`UPDATE ${table} SET judul= ?, isi= ? WHERE id= ?`, 
  [newData.judul, newData.isi, id],(err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

Artikel.delete = (id, result)=>{
  conn.query(`DELETE FROM ${table} WHERE ID = ${id}`, (err, res)=>{
    if(err) result(null, err)
    result(null, res)
  })
}

module.exports = Artikel