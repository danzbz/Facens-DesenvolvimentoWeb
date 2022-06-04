module.exports = class HomeController {
  static async showHome(req, res) {
    res.render('home/index')
  }
  static async showEquipe(req, res) {
    res.render('home/equipe')
  }
}
