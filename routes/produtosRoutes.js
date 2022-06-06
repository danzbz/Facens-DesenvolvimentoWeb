const express = require('express')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')


router.get('/', ProdutoController.showProdutos)
router.get('/produtos', ProdutoController.showProdutos)
router.get('/create', ProdutoController.createProduto)
router.post('/create', ProdutoController.createProdutoPost)
router.get('/:id', ProdutoController.getProduto)
router.post('/remove/:id', ProdutoController.removeProduto)
router.get('/edit/:id', ProdutoController.editProduto)
router.post('/edit', ProdutoController.editProdutoPost)

module.exports = router
