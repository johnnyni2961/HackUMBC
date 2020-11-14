const express = require('express');
const router = express.Router();
const sqlQuery = require('./db');

//TODO: authenticate requests? 
// add create user and more robust fetch user methods

router.get('/id/:id', function(req,res) {
    sqlQuery(`select * from users where ?`, {id:req.params.id}, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

router.get('/name/:name', function(req,res) {
    sqlQuery(`select * from users where ?`, {username:req.params.name}, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});


module.exports = router;