const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb://localhost:27017/InnovationTech')
  console.log('Foi realizado a conexão com o Mongo!')
}

main().catch((err) => console.log(err))

module.exports = mongoose
