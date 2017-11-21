const sequelize = require('../config/sequelize');

const Question = sequelize.define('Question', {
    question_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: Sequelize.STRING, allowNull: true},
    content: {type: Sequelize.STRING, allowNull: true}
}, {
    tableName: 'question',
    underscored: true,
    timestamps: true
});

const Answer = sequelize.define('Answer', {
    answer_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    content: {type: Sequelize.STRING, allowNull: true}
}, {
    tableName: 'answer',
    underscored: true,
    timestamps: true
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
    console.log('Question Sync Success');

    Answer.sync().then((result) => {
        console.log('Answer Sync Success');
    }).catch((error) => {
        console.log('Answer Sync Fail', error.message);
    });

    Keyword.sync().then((result) => {
        console.log('Keyword Sync Success');
    }).catch((error) => {
        console.log('Keyword Sync Fail', error.message);
    });

}).catch((error) => {
    console.log('Question Sync Fail', error.message);
});

module.exports.Question = Question;
module.exports.Answer = Answer;
module.exports.Keyword = Keyword;
