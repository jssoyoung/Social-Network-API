const { connect, connection } = require('mongoose');

connect('mongodb://localhost/', {

});

module.exports = connection;