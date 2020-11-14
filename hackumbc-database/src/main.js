const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/users', require('./users'));

app.listen(8090);