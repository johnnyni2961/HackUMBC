const express = require('express');
var cookieParser = require('cookie-parser');

const cors = require('cors');
const app = express();

const corsOptions = {
    credentials: true,
    origin: (origin, callback) => {
        if(["http://localhost:8080"].includes(origin)) return callback(null, true);

        callback(new Error("Not allowed by CORS"));
    }
}

app.use(cors(corsOptions), cookieParser());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', require('./users'));



//app.use(cookieParser);


app.listen(8090);