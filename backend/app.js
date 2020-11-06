const express = require ('express');
const app = express();
const bodyParser = require ('body-parser');

const mongoose = require('mongoose');

const Book = require('./models/book')

app.use (bodyParser.json());

mongoose.connect('mongodb+srv://user:user@cluster0.iud3g.mongodb.net/books?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true
   })
  .then(() => {
    console.log("Conexão OK!");
  })
  .catch((error) => {
    console.log("Conexão falhou!");
    console.log(error);
  })


app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');

  next();
});

app.get('/api/books', (req, res, next) => {
  Book.find().then(
    documents => {
      res.status(200).json(
        {
          mensagem: "Tudo OK",
          books: documents
        }
      );
    }
  );
});

app.post('/api/books', (req, res, next) => {
  const book = new Book({
    id: req.body.id,
    titulo: req.body.titulo,
    autor: req.body.autor,
    npaginas: req.body.npaginas
  });

  book.save();

  console.log(book);
  res.status(201).json({mensagem: 'Livro inserido com sucesso'})
});

module.exports = app;
