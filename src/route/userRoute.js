const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')

router.get('/', userController.findAll)
router.get('/user/:id', userController.findById)
router.post('/create-user', userController.create)
router.put('/update/:id', userController.update)
router.delete('/delete/:id', userController.delete)
router.post('/auth', userController.auth)

module.exports = router