const express = require('express');
const app = express();

var bodyParser = require('body-parser');
const port = 3000;
const mockData = require("./details.json");
const userCredentials = require("./userData.json");
const { get } = require('http');
usersCredDataArray = [];
usersCredDataArray = userCredentials;

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Credentials', true");

  res.header("Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT'");

  res.header(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin, Accept, X-Requested-with, Content-Type, Access-Control');
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

app.get('/restaurant',(req,res)=>
{
    res.send(mockData);
})

app.post('/login', function (req, res) {
    const passData = req.body;
    const { username, password } = passData;
    var foundUser = this.usersCredDataArray.filter(function (user) {
     const { jsonUsername, jsonPassword } = user;
     return username === jsonUsername && password === jsonPassword;
     });
  
    if (foundUser.length > 0) {
    res.status(200).send(mockData);
    }
  
    else {
    res.status(500).send('{"error":"Invalid username or password"}');
    }
   })