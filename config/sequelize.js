const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'databasename',
    'username',
    'password',
    {
        'host' : 'localhost',
        'dialect' : 'mysql'
    }
);

module.exports = sequelize;
