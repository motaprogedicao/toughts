const express = require('express')
const router = express.Router()
const ToughtsController = require('../controllers/ToughtsController') //importando o controller
//controller

router.get('/', ToughtsController.showToughts) //invocando metodo da classe

module.exports = router