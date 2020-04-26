const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciar o app
const app = express();
app.use(express.json());
app.use(cors());

// Iniciar o bando de dados
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useNewUrlParser: true }
);

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);