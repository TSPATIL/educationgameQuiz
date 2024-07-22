const express = require('express')
const connectToMongo = require('./db')
const { config } = require('dotenv')
const cors = require('cors');

connectToMongo();

config();
const app = express()
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/question', require('./routes/question'));
app.use('/api/answer', require('./routes/ans'));
app.use('/api/feedback', require('./routes/feedback'));

app.listen(port, () => {
  console.log(`iQuiz app listening at http://127.0.0.1:${port}`)
})