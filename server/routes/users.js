const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
router.use(cors());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_CONNECT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

function getConnection(){
  return pool
}

router.post('/api/create-user', (req,res)=> {
  console.log(req.body);
  const {first_name, last_name, email, message, viewer} = req.body

  const connection = getConnection()

  const query = 'INSERT INTO users (first_name, last_name, email, message, visitor) VALUES (?, ?, ?, ?, ?)'
  connection.query(query, [first_name, last_name, email, message, viewer], (err,results,fields)=> {
    if (err) {
      res.sendStatus(500);
      return
    }
    console.log("Successful insertion.", results.insertId);
    res.end();

  })
})

router.get('/api/users',(req,res)=> {
  const connection = getConnection()

  const queryString = "SELECT * FROM users"
  connection.query(queryString, (err,rows,fields) => {
    if (err) {
      console.log('Failed to query for users:' + err)
      res.sendStatus(500)
      return
    }
    const users = rows.map(row => {
      return {firstName: row.first_name, lastName: row.last_name}
    })
   res.send(users);
  });
});

router.get('/api/user/:id', (req,res)=> {
  const connection = getConnection();
  const userId = req.params.id;
  const queryString = "SELECT * FROM users WHERE id = ?"
  connection.query(queryString, [userId], (err,rows,fields) => {
    if (err) {
      console.log('Failed to query for users:' + err)
      res.sendStatus(500)
      return
    }
    // console.log('I think we fetched from the database')
    const users = rows.map(row => {
      return {firstName: row.first_name, 
              lastName: row.last_name,
              email: row.email,
              message: row.message,
            visitor: row.visitor}
    })
   res.send(users);
  });
});

module.exports = router;