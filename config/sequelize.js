const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'database_name',
    'user_name',
    'password',
    {
        'host' : 'localhost',
        'dialect' : 'mysql'
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("SEQUELIZE AUTHENTICATE SUCCESS");
    })
    .catch((err) => {
        console.log("SEQUELIZE AUTHENTICATE FAIL", err);
    })
    .done();

module.exports.Sequelize = Sequelize;
module.exports.sequelize = sequelize;
