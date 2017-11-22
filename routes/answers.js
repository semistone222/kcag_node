const express = require('express');
const router = express.Router();

const Question = require('../model/models.js').Question;
const Answer = require('../model/models.js').Answer;
const Keyword = require('../model/models.js').Keyword;

router.route('/')
    .get(sendAnswers)
    .post(addAnswer);

router.route('/:answerId')
    .get(sendAnswer)
    .delete(deleteAnswer);

function addAnswer(req, res, next) {
    const questionId = req.body.questionId;
    const content = req.body.content;

    Question.findOne({
        where: {question_id: questionId},
        include: [{model: Answer}, {model: Keyword}]
    }).then((question) => {
        Answer.create({
            content: content
        }).then((answer) => {
            question.addAnswer(answer);
            res.send(answer);
        }).catch((err) => {
            next(err);
        });
    }).catch((err) => {
        next(err);
    });
}

function sendAnswers(req, res, next) {
    Answer.findAll({
        include: [
            {model: Question}
        ]
    }).then((answers) => {
        res.send(answers);
    }).catch((err) => {
        return next(err);
    });
}

function sendAnswer(req, res, next) {
    const answerId = req.params.answerId;
    Answer.findOne({
        where: {answer_id: answerId},
        include: [
            {model: Question}
        ]
    }).then((answers) => {
        res.send(answers);
    }).catch((err) => {
        return next(err);
    });
}

function deleteAnswer(req, res, next) {
    const answerId = req.params.answerId;
    Answer.destroy({
        where: {answer_id: answerId}
    }).then((affected) => {
        res.send(affected.toString());
    }).catch((err) => {
        return next(err);
    });
}

module.exports = router;
