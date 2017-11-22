const Sequelize = require('../config/sequelize').Sequelize;
const sequelize = require('../config/sequelize').sequelize;

const Question = sequelize.define('Question', {
    question_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: Sequelize.STRING, allowNull: true},
    content: {type: Sequelize.STRING, allowNull: true}
}, {
    tableName: 'question',
    underscored: true,
    timestamps: true,
    hooks: {
        afterCreate: console.log("AFTER CREATE QUESTION"),
        afterUpdate: console.log("AFTER UPDATE QUESTION")
    }
});

const Answer = sequelize.define('Answer', {
    answer_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    content: {type: Sequelize.STRING, allowNull: true}
}, {
    tableName: 'answer',
    underscored: true,
    timestamps: true,
    hooks: {
        afterCreate: console.log("AFTER CREATE ANSWER"),
        afterUpdate: console.log("AFTER UPDATE ANSWER"),
        afterDestroy: console.log("AFTER DESTROY ANSWER")
    }
});

const Keyword = sequelize.define('Keyword', {
    keyword_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    content: {type: Sequelize.STRING, allowNull: true}
}, {
    tableName: 'keyword',
    underscored: true,
    timestamps: true
});

Question.hasMany(Answer, {foreignKey: 'question_id'});
Question.hasMany(Keyword, {foreignKey: 'question_id'});
Answer.belongsTo(Question, {foreignKey: 'question_id', targetKey: 'question_id'});
Keyword.belongsTo(Question, {foreignKey: 'question_id', targetKey: 'question_id'});

Question.sync().then((result) => {
    console.log('QUESTION SYNC SUCCESS');

    Answer.sync().then((result) => {
        console.log('ANSWER SYNC SUCCESS');
    }).catch((err) => {
        console.log('ANSWER SYNC FAIL', err.message);
    });

    Keyword.sync().then((result) => {
        console.log('KEYWORD SYNC SUCCESS');
    }).catch((err) => {
        console.log('KEYWORD SYNC FAIL', err.message);
    });

}).catch((err) => {
    console.log('QUESTION SYNC FAIL', err.message);
});

module.exports.Question = Question;
module.exports.Answer = Answer;
module.exports.Keyword = Keyword;
