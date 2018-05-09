var orm = require('../config/orm.js');

var burger = {
    all: function(cbk) {
        orm.selectAll('burgers', function(data) {
            cbk(data);
        });
    },
    create: function(burger_name, cbk) {
        orm.insertOne('burgers', burger_name, function(data) {
            cbk(data);
        });
    },
    devour: function(id, cbk) {
        orm.updateOne('burgers', {devoured: 1}, id, function(data) {
            cbk(data);
        });
    }
}

module.exports = burger;