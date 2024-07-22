const { mongoose } = require('mongoose');
const {Schema} = mongoose;

const AnsSchema = Schema({
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
    },
    playedUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
});

const Answer = mongoose.model('answer', AnsSchema);
module.exports = Answer;