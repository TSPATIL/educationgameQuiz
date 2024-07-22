const express = require('express');
const fetchuser = require('../middlewares/fetchuser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const Question = require('../models/Question');

//Route 1: Create a new quizz using 'POST' at 'http://127.0.0.1:5000/api/question/createquiz'
router.post('/createquiz', fetchuser, [
    body('subject', 'Enter a valid subject').exists(),
    body('questionList', 'Required 16 questions').isArray(),
    body('quizcode', 'Enter a valid quizcode').isLength({ min: 6, max: 6 })
], async (req, res) => {
    try {
        let success = false;
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ success, error: result.array() });
        }
        const {subject, questionList, quizcode} = req.body;
        const question = new Question({
            subject, questionList, quizcode, user: req.user.id
        });
        const savedQuestion = await question.save();
        success = true;
        res.json({success, savedQuestion});
    } catch (error) {
        res.status(500).json({success: false, error: 'Internal server error'});
    }
})

//Route 2: Get a quizz using 'GET' at 'http://127.0.0.1:5000/api/question/getquiz'
router.get('/getquiz/:code', fetchuser, async (req, res) => {
    try {
        let success = false;
        const question = await Question.find({quizcode: req.params.code});
        if(!question){
            return res.status(400).json({success, error: 'Invalid QuizCode'});
        }
        success = true;
        res.json({success, question});
    } catch (error) {
        res.status(500).json({success: false, error: 'Internal server error'});
    }
})

module.exports = router;