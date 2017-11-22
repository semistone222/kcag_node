const express = require('express');
const router = express.Router();

const Answer = require('../model/models.js').Answer;

router.route('/')
    .get(sendAnswers)
    .post(addAnswer);

router.route('/:answerId')
    .get(sendAnswer)
    .delete(deleteAnswer);

function addAnswer(req, res, next) {
    res.sendStatus(501);
}

function sendAnswers(req, res, next) {
    res.sendStatus(501);
}

function sendAnswer(req, res, next) {
    res.sendStatus(501);
}

function deleteAnswer(req, res, next) {
    res.sendStatus(501);
}

module.exports = router;
