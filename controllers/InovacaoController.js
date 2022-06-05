const Inovacao = require('../models/Inovacao')
module.exports = class InovacaoController {
//verficiar os parametros
  static async showInovacao(req, res) {
    const inovacoes = await Inovacao.find({}).lean() 
    res.render('inovacoes/all', { inovacoes })
  }

  static async createInovacao(req, res) {
    res.render('inovacoes/create')
  }

  static async createInovacaoPost(req, res) {
    const titulo = req.body.titulo
    const subtitulo = req.body.subtitulo
    const autor = req.body.autor
    const email = req.body.email
    const descricao = req.body.descricao
    const imagem = req.body.imagem
    const inovacao = new Inovacao({ titulo, subtitulo, autor, email, descricao , imagem })
    await inovacao.save()
    res.redirect('/inovacoes')
  }

   static async getInovacao(req, res) {
    const id = req.params.id
    const inovacao = await Inovacao.findById(id).lean()
    res.render('inovacoes/inovacao', { inovacao })
  }

  static async removeInovacao(req, res) {
    const id = req.params.id
    await Inovacao.deleteOne({ _id: id })
    res.redirect('/inovacoes')
  }

  static async editInovacao(req, res) {
    const id = req.params.id
    const inovacao = await Inovacao.findById(id).lean()
    res.render('inovacoes/edit', { inovacao })
  }

  static async editInovacaoPost(req, res) {
    const id = req.body.id
    const nome = req.body.nome
    const valor = req.body.valor
    const descricao = req.body.descricao
    const imagem = req.body.imagem
    const inovacao = { nome, valor, descricao, imagem }
    await Inovacao.updateOne({ _id: id }, inovacao)
    res.redirect('/inovacoes')
  }
}
