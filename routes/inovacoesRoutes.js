const express = require('express')
const router = express.Router()
const InovacaoController = require('../controllers/InovacaoController')

router.post('/edit', InovacaoController.editInovacaoPost)
router.get('/', InovacaoController.showInovacao)
router.get('/produtos', InovacaoController.showInovacao)
router.get('/create', InovacaoController.createInovacao)
router.post('/create', InovacaoController.createInovacao)
// router.get('/:id', InovacaoController.getProduto)
router.post('/remove/:id', InovacaoController.removeInovacao)
router.get('/edit/:id', InovacaoController.editInovacao)

module.exports = router
