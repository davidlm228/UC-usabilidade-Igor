// importar o pacote 'mongoose'
const mongoose = require('mongoose');

// Definir o esquema dos nossos dados
const clienteSchema = mongoose.Schema( {
  id: {
    type: String,
    required: true
   },
  titulo: {
    type: String,
    required: false,
    default: '000000000'
  },
  autor: {
    type: String,
    required: true
  },
  npaginas: {
    type: String,
    required: true
  }
} );

// Criar um modelo associado ao esquema:
module.exports = mongoose.model('Cliente', clienteSchema)
