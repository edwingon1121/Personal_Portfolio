const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes/users');
const path = require('path');
require('dotenv').config();
console.log(process.env.DB_CONNECT)

app.use(express.static(path.join(__dirname, 'build')));

if(process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res) {
   	res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}
app.use(router);
// app.use(express.static());
app.use(morgan('short'));
app.use(bodyParser.urlencoded({extended: false}));


app.listen(process.env.PORT || 5000, ()=> {
  console.log('Server is up and listening on 3003...')
});