var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../user/User');


// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});


module.exports = router;

/* 
You’ll be using the express router to create a subset of routes which can be modular and independent from the whole app. 
If you ever need to re-structure your program, you can easily do so 
because this approach gives you the ability to just plug it out from one place and plug it in somewhere else. 
The body-parser module is used as a middleware to handle data in a more elegant way. 
This will come in handy when sending data through HTTP requests using forms.*/