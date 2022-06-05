const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb://localhost:27017/DBCad3')
  console.log('Conectado ao DB do Mongo!')
}

main().catch((err) => console.log(err))

module.exports = mongoose
