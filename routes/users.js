const express = require('express');
const router = express.Router();
const user = require('../controllers/userController.js');


//Routes handlers for our home page
router.get('/home', (req, res) => {
    res.render('home');
});

router.use(express.urlencoded({extended: true}));
//Users post route to add a new user
router.post('/users', userController.createUser);

module.exports = router;