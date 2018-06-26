var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Product = require("../model/Product");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/', function (req, res) {
    Product.create({
            name : req.body.name,
            image : req.body.image,
            price : req.body.price,
            productNumber: req.body.productNumber
        }, 
        function (err, user) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(user);
        });
});

router.get('/', function (req, res) {
    Product.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

module.exports = router;