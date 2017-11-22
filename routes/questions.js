const express = require('express');
const router = express.Router();

const Question = require('../model/models.js').Question;
const Answer = require('../model/models.js').Answer;
const Keyword = require('../model/models.js').Keyword;

router.route('/')
    .get(sendQuestions)
    .post(addQuestion);

router.route('/:questionId')
    .get(sendQuestion)
    .delete(deleteQuestion);

function sendQuestions(req, res, next) {
    Question.findAll({
        include: [
            {model: Answer},
            {model: Keyword}
        ]
    }).then((questions) => {
        res.send(questions);
    }).catch((err) => {
        return next(err);
    });
}

function addQuestion(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;
    Question.create({
        title: title,
        content: content
    }).then((question) => {
        res.send(question);
    }).catch((err) => {
        return next(err);
    });
}

function sendQuestion(req, res, next) {
    const questionId = req.params.questionId;
    Question.findOne({
        where: {question_id: questionId},
        include: [
            {model: Answer},
            {model: Keyword}
        ]
    }).then((question) => {
        res.send(question);
    }).catch((err) => {
        return next(err);
    });
}

function deleteQuestion(req, res, next) {
    const questionId = req.params.questionId;
    Question.destroy({
        where: {question_id: questionId}
    }).then((affected) => {
        res.send(affected.toString());
    }).catch((err) => {
        return next(err);
    });
}

module.exports = router;
