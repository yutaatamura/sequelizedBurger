var connection = require('../config/connection.js');

var orm = {
    selectAll: function(tableInput, cbk) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
            cbk(result);
        });
    },
    insertOne: function(tableInput, col, cbk) {
        var queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [tableInput, col], function(err, result) {
            if (err) throw err;
            console.log(result);
            cbk(result);
        });
    },
    updateOne: function(tableInput, col, id, cbk) {
        var queryString = "UPDATE ?? SET ? WHERE id = ?";
        connection.query(queryString, [tableInput, col, id], function (err, result) {
            if (err) throw err;
            console.log("this is result"+result);
            cbk(result);
        });
    }
};

module.exports = orm;