const express = require('express');
const fetchuser = require('../middlewares/fetchuser');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const Feedback = require('../models/Feedback');

//Route 1: Create a new answer using 'POST' at 'http://127.0.0.1:5000/api/feedback/createfeedback'
router.post('/createfeedback', fetchuser, [
    body('rating', 'Enter a valid subject').exists(),
    body('comment', 'Enter comment').exists(),
    body('quizcode', 'Enter a valid quizcode').isLength({ min: 6, max: 6 })
], async (req, res) => {
    try {
        let success = false;
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ success, error: result.array() });
        }
        const {rating, comment, quizcode} = req.body;
        //const userid = mongoose.Types.ObjectId(userId);
        const feedback = new Feedback({
            rating, comment, quizcode, user: req.user.id
        });
        const savedFeedback = await feedback.save();
        success = true;
        res.json({success, savedFeedback});
    } catch (error) {
        res.status(500).json({success: false, error: 'Internal server error', message: error.message});
    }
})

//Route 3: Get all the answer of played user of specific quiz using 'GET' at 'http://127.0.0.1:5000/api/question/getanswer'
router.get('/getfeedback', fetchuser, async (req, res) => {
    try {
        let success = false;
        console.log(req.user.id)
        const feedback = await Feedback.find({user: req.user.id});
        if(!feedback){
            console.log(1);
            return res.status(400).json({success, error: 'Invalid QuizCode'});
        }
        success = true;
        res.json({success, feedback});
    } catch (error) {
        res.status(500).json({success: false, error: 'Internal server error', message: error.message});
    }
})

module.exports = router;