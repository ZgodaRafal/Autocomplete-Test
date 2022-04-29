const express = require('express');
const cors = require('cors')
const app = express();

var corsOptions = {
    origin: '*',
  }

app.use(cors(corsOptions))

const data = ['Roberto',
    'Stephanie',
    'Daniel',
    'Maxime',
    'Bruno',
    'Robert',
    'Douglas',
    'Sergey',
    'Kim',
    'Kenji'];


app.get('/api/names', function (req, res) {
    res.send(data);
});

app.listen(8000);
