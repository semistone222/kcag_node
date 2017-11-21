const express = require('express');
const router = express.Router();

const Question = require('../model/models.js').Question;
const Answer = require('../model/models.js').Answer;
const Keyword = require('../model/models.js').Keyword;

router.route('/questions')
    .get(sendQuestions)
    .post(addQuestion);

router.route('/questions/:questionId')
    .get(sendQuestion)
    .delete(deleteQuestion);

function sendQuestions(req, res, next) {
    Question.findAll({
        include: [
            {model: Answer},
            {model: Keyword}
        ]
    }).then((result) => {
        res.send(result);
    }).catch((error) => {
        return next(error);
    });
}

function addQuestion(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;
    Question.create({
        title: title,
        content: content
    }).then((result) => {
        res.send(result);
    }).catch((error) => {
        return next(error);
    });
}

function sendQuestion(req, res, next) {
    const questionId = req.params.questionId;
    Question.findOne({
        question_id: questionId,
        include: [
            {model: Answer},
            {model: Keyword}
        ]
    }).then((result) => {
        res.send(result);
    }).catch((error) => {
        return next(error);
    });
}

function deleteQuestion(req, res, next) {
    const questionId = req.params.questionId;
    Question.destroy({
        question_id: questionId
    }).then((result) => {
        res.send(result);
    }).catch((error) => {
        return next(error);
    });
}

module.exports = router;
