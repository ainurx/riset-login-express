'use strict'

const conn = require('../../config/database')

const User = function(user){
  this.username = user.username
  this.password = user.password
  this.name = user.name
}

