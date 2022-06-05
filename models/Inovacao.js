const mongoose = require('../db/conn')
const { Schema } = mongoose

const Inovacao = mongoose.model(
  'Inovacao',
  new Schema({
    titulo:      { type: String, required: false,  },
    subtitulo:      { type: String, required: false,  },
    autor:     { type: String,  required: false,   },
    email: { type: String, required: false,   },
    descricao: { type: String, required: false,   },
    imagem: {type: String,  required: false }
  }),)

module.exports = Inovacao
