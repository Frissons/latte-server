const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = 5000;



app.listen(port, () => console.log(`Server started on ${port}`))
 