const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/HomeController')

router.get('/', HomeController.showHome)
router.get('/equipe', HomeController.showEquipe)


module.exports = router
