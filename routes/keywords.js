const express = require('express');
const router = express.Router();

const Keyword = require('../model/models.js').Keyword;

router.route('/')
    .get(sendKeywords)
    .post(addKeyword);

router.route('/:keywordId')
    .get(sendKeyword)
    .delete(deleteKeyword);

function addKeyword(req, res, next) {
    res.sendStatus(501);
}

function sendKeywords(req, res, next) {
    res.sendStatus(501);
}

function sendKeyword(req, res, next) {
    res.sendStatus(501);
}

function deleteKeyword(req, res, next) {
    res.sendStatus(501);
}

module.exports = router;
