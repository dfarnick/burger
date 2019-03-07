//import orm
var orm = require("../config/orm.js");


///////
var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
          callback(res);
        });
      },
      insertOne: function(burger_name, callback) {
        orm.insertOne("burgers", "burger_name", burger_name, function(res) {
          callback(res);
        });
      },
      updateOne: function(id, callback) {
        orm.updateOne("burgers", "devoured", 1, "id", id, function(res) {
          callback(res);
        });
      }    
    };

module.exports = burger;