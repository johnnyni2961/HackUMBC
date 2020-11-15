const express = require('express');
const router = express.Router();
const sqlQuery = require('./db');
const mysql = require('mysql2');
const validate = require('./validate');
const sha256 = require('js-sha256').sha256;

//TODO: authenticate requests? 
// add create user and more robust fetch user methods

router.get('/name', function(req,res) {
    sqlQuery(`select * from users where ?`, {username:req.query.username}, (err, results) => {
        if (err) throw err;
        if(results.length > 0) {
            let {id, passhash, ...tosend} = results[0];
            res.send(tosend);
        } else {
            res.send({});
        }
        
    });
});

router.get('/authenticate', function(req,res,next) {
    var [ sessionID, username ] = req.query.sessionID.split("-");
    sqlQuery(`select * from users where username=${mysql.escape(username)} and sha2(concat(id,username),256)=${mysql.escape(sessionID)}`, (err,results) => {
        if (results.length < 1) {
            res.send({ "message": "BAD" });
        } else {
            res.send({ "message": "OK" });
        }
    }) 
});

router.post('/login', validate.authSchema, function(req,res,next) {
    var { username, password } = req.body;
    try {
        sqlQuery(`select * from users where username=${mysql.escape(username)} and passhash=sha2(${mysql.escape(password)},256)`, (err, results) => {
            if (err) throw err;
            if(results.length > 0) {
                res.cookie("sessionID", sha256(results[0].id + username)+`-${username}`).send('sessionID set')
            } else {
                res.status(401).send({ "message": "Incorrect username/password "})
            }
        })
    } catch (err) {
        console.log(err);
    }
})

router.post('/name', validate.registerSchema, function(req, res, next) {
    var { username, password, fname, lname, type } = req.body;
    try {
        sqlQuery(`insert into users(username,passhash,fname,lname,type) values (${mysql.escape(username)}, sha2(${mysql.escape(password)}, 256), ${mysql.escape(fname)}, ${mysql.escape(lname)}, ${mysql.escape(type)})`, (err, results) => {
            sqlQuery(`select * from users where username=${mysql.escape(username)}`, (err,results) => {
                res.cookie("sessionID", sha256(results[0].id + username)+`-${username}`).sendStatus(201);
            });
        });
    } catch (err) {
        switch(err.errno) { 
            case 1062:
                res.status(409).send({ "message": "Duplicate username" });
                break
            default:
                res.status(400).send({ "message": "MySQL error" });
        }
    }
    
});

router.post('/logout', function(req,res) {
    res.cookie("sessionID","",{"maxAge":-999999}).send("Signed out!");
})


module.exports = router;