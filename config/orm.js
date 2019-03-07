var connection = require("./connection.js");


var orm = {
    selectAll: function(table, callback) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },  

    insertOne: function(table, col, vals, callback){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, vals], function(err, result){
            if (err){
                throw err;
            }
            callback(result);
        });
    },
    updateOne: function(table, changecol, changeval, targetcol, targetval, callback){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        
        connection.query(queryString, [table, changecol, changeval, targetcol, targetval], function(err, result){
            if(err){
                throw err;
            }
            callback(result);
        });
    }
};
module.exports = orm;