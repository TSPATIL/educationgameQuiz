const mongoose = require('mongoose');
const {Schema} = mongoose;

const QuesSchema = Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    subject: {
        type: String,
        required: true
    },
    questionList: {
        type: Array,
        default: []
    },
    quizcode: {
        type: Number,
        default: 123456
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Question = mongoose.model('question', QuesSchema);
module.exports = Question;