const mysql = require('mysql2');
const { host, user, password, database } = require('../config.json');

function sqlQuery(query, params, callback) {
    if(arguments.length === 2) {
        callback = params;
        params = null;
    }

    var connection = mysql.createConnection({
        host,user,password,database
    });
    connection.connect(err => {if (err) throw err});

    connection.query(query, params, (err, results) => {
        connection.end();
        if(err) throw err;

        callback(err, results);
    });
}

module.exports = sqlQuery;


