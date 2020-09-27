const express = require('express')
const router = express.Router()
const artikelController = require('../controller/artikelController')
const { route } = require('./userRoute')

router.get('/artikel', artikelController.findAll)
router.get('/artikel/:id', artikelController.findById)
router.post('/create-artikel', artikelController.create)
router.put('/update-artikel/:id', artikelController.update)
router.delete('/delete-artikel/:id', artikelController.delete)

module.exports = router