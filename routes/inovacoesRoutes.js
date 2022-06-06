const express = require('express')
const router = express.Router()
const InovacaoController = require('../controllers/InovacaoController')

router.post('/edit', InovacaoController.editInovacaoPost)
router.get('/', InovacaoController.showInovacao)
router.get('/inovacoes', InovacaoController.showInovacao)
router.get('/create', InovacaoController.createInovacao)
router.post('/create', InovacaoController.createInovacaoPost)
router.get('/:id', InovacaoController.getInovacao)
router.post('/remove/:id', InovacaoController.removeInovacao)
router.get('/edit/:id', InovacaoController.editInovacao)

module.exports = router
