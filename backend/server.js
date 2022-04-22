const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.status(201).json({message: 'Welcome to the top 10 crypto app'})
})

app.use('/api/topCryptos', require('./routes/topCryptosRoute'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`backend server started on ${PORT}`));