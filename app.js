const express = require('express');
const app = express();
const userRoutes = require('./routes/users.js');
require('dotenv').config();
const port = process.env.PORT;



//Setup the views engine
app.set('view engine', 'ejs');
app.set('views',  './views');

//Middleware to serve static files
app.use(express.static('public'));
app.use(userRoutes);


app.listen(port, () => {
    console.log(`Connected on port ${port}`)
})


app.get('/json', (req, res) => {
    const data = {
        username: 'tirth',
}
    res.json(data);
});

app.get('/ejs', (req, res) => {
   const data = {
       "1": "tirth",
       "2": "mohit",
       "3": "prashant",
       "4": "sarthak",
   }
    res.render('home', {data});
});