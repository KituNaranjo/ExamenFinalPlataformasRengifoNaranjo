'use strict'
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

const cors = require('cors');

require('./database')

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname, 'backend/src/upload')));

app.listen(3000, () => {
    console.log(`Servidor en el puerto ${3000}`);
});
