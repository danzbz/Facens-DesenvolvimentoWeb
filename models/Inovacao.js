const mongoose = require('../db/conn')
const { Schema } = mongoose

const Inovacao = mongoose.model(
  'Inovacao',
  new Schema({
    titulo:      { type: String, required: true,  },
    subtitulo:      { type: String, required: true,  },
    autor:     { type: String,  required: true,   },
    email: { type: String, required: true,   },
    descricao: { type: String, required: true,   },
    imagem: {type: String,  required: true }
  }),)

module.exports = Inovacao
