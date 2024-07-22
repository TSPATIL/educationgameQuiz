const express = require('express');
const fetchuser = require('../middlewares/fetchuser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const Answer = require('../models/Answer');

//Route 1: Create a new answer using 'POST' at 'http://127.0.0.1:5000/api/question/createanswer'
router.post('/createanswer', fetchuser, [
    body('subject', 'Enter a valid subject').exists(),
    body('questionList', 'Required 16 questions').isArray(),
    body('quizcode', 'Enter a valid quizcode').isLength({ min: 6, max: 6 }),
    body('userId', 'Enter a valid user').exists()
], async (req, res) => {
    try {
        let success = false;
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ success, error: result.array() });
        }
        const {subject, questionList, quizcode, userId} = req.body;
        //const userid = mongoose.Types.ObjectId(userId);
        const user = await User.findById(userId);
        if(!user){
            return res.status(401).json({success, error: 'Not Allowed'});
        }
        const answer = new Answer({
            subject, questionList, quizcode, playedUser: req.user.id, user: userId
        });
        const savedAnswer = await answer.save();
        success = true;
        res.json({success, savedAnswer});
    } catch (error) {
        res.status(500).json({success: false, error: 'Internal server error'});
    }
})

//Route 2: Get all the answer of played user of specific quiz using 'GET' at 'http://127.0.0.1:5000/api/question/getanswer'
router.get('/getanswer/:code', fetchuser, async (req, res) => {
    try {
        let success = false;
        const answers = await Answer.find({quizcode: req.params.code});
        if(!answers){
            return res.status(400).json({success, error: 'Invalid QuizCode'});
        }
        success = true;
        res.json({success, answers});
    } catch (error) {
        res.status(500).json({success: false, error: 'Internal server error'});
    }
})

//Route 3: Get all the answer of played user of specific quiz using 'GET' at 'http://127.0.0.1:5000/api/question/getanswer'
router.get('/getAnsweruser', fetchuser, async (req, res) => {
    try {
        let success = false;
        console.log(req.user.id)
        const answers = await Answer.find({playedUser: req.user.id});
        if(!answers){
            console.log(1);
            return res.status(400).json({success, error: 'Invalid QuizCode'});
        }
        success = true;
        res.json({success, answers});
    } catch (error) {
        res.status(500).json({success: false, error: 'Internal server error', message: error.message});
    }
})

//Route 3: Get all the answer of played user of specific quiz using 'GET' at 'http://127.0.0.1:5000/api/question/getanswer'
router.get('/getanswerquiz', fetchuser, async (req, res) => {
    try {
        let success = false;
        console.log(req.user.id)
        const answers = await Answer.find({user: req.user.id});
        if(!answers){
            console.log(1);
            return res.status(400).json({success, error: 'Invalid QuizCode'});
        }
        success = true;
        res.json({success, answers});
    } catch (error) {
        res.status(500).json({success: false, error: 'Internal server error', message: error.message});
    }
})

module.exports = router;