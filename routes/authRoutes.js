const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthControler') //importando o controller
//controller

router.get('/login', AuthController.login) //invocando metodo da classe
router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost)
router.get('/logout', AuthController.registerPost)

module.exports = router