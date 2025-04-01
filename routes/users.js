const express = require('express');
const router = express.Router();
const {createUser} = require('../controllers/userController.js');


//Routes handlers for our home page
router.get('/home', (req, res) => {
    res.render('home');
});

module.exports = router;