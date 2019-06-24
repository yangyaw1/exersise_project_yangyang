const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const testService = require('../services/testService');
const userService = require('../services/userService');

router.get('/tests', (req, res) => {
    testService.gettests()
       .then((tests) => {
           res.json(tests);
       }, error =>{
           res.status(400).send("unexpected error!");
       });
});

router.get('/tests/:id', (req, res) => {
    const id = req.params.id;
    testService.gettest(+id)
       .then((test) => {
           res.json(test);
       }, error =>{
           res.status(400).send("tests id exceeds limit!");
       });
});

router.post('/tests', jsonParser, (req, res) => {
    testService.addtest(req.body)
      .then(test => {
          res.json(test);
      }, error =>{
          res.status(400).send("test already exists!");
      });
});

router.get('/users', (req, res) => {
    userService.getusers()
       .then((users) => {
           res.json(users);
       }, error =>{
           res.status(400).send("unexpected error!");
       });
});

router.get('/users/:username', (req, res) => {
    const username = req.params.username;
    userService.getuser(username)
       .then((user) => {
           res.json(user);
       }, error =>{
           res.status(400).send("Cannot find user!");
       });
});

router.post('/users', jsonParser, (req, res) => {
    userService.adduser(req.body)
      .then(user => {
          res.json(user);
      }, error =>{
          res.status(400).send("user already exists!");
      });
});

module.exports = router;