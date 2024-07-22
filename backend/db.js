const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/iQuiz';

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=> console.log('Connected to MongoDB successfully')).catch(error => console.log(error));
}

module.exports = connectToMongo;