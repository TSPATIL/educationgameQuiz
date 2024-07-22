const mongoose = require('mongoose');
const {Schema} = mongoose;

const FeedBackSchema = Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    rating: {
        type: Number,
        default: 1
    },
    comment: {
        type: String,
        required: true
    },
    quizcode: {
        type: Number,
        required: true
    }
})

const Feedback = mongoose.model('feedback', FeedBackSchema);
module.exports = Feedback;