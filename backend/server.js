const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;
connectDB();
app.use(express.json());
app.use(errorHandler);
app.use(express.urlencoded({extended: false}))


app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => console.log(`Server started on ${port}`))
