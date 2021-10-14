const express = require('express');
require('dotenv').config({ path: './config/config.env' });
const database = require('./db/db');
const cookieParser = require('cookie-parser');
var cors = require('cors');
const path = require('path');
const user = require('./router/userRouter');
const autho = require('./router/authoRouter');
const allError = require('./middleware/allError');
const app = express();

// connect to Database
database();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes
app.use('/user', user);
app.use('/autho', autho);
const port = process.env.PORT || 5001;
// connection to server

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('api running');
  });
}

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

// handling error
app.use(allError);
