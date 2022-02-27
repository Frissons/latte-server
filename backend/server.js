const path = require('path')
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
app.use('/api/candidates', require('./routes/candidateRoutes'));


//Serve FrontEnd
if(process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname, '../client/build')))
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,'../', 'client', 'build','index.html' )))
}
else {
    app.get('/', (req,res) => res.send('Please set to production'))
}


app.listen(port, () => console.log(`Server started on ${port}`))
