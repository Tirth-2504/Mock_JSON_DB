/*
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
*/

const express = require('express');
const app = express();
const userRoutes = require('./routes/users.js');
require('dotenv').config();
const PORT = process.env.PORT;
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const uri ='mongodb+srv://TIRTH:tirth2130@cluster0.boux33a.mongodb.net/';
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger.yaml');


const fixdWindowRateLimit = rateLimit({
    windowMs: 1 * 15 * 1000,
    max: 10,
    message: 'Too many requests , please try again',
});

//Setup the view engine
app.set('view engine','ejs');
app.set('views', './views');

//Middleware to serve static files
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(fixdWindowRateLimit);
app.use(userRoutes);

mongoose.connect(uri).then(
    async () => {
        console.log('Connected to MongoDB Server');

        app.listen(PORT, '0.0.0.0', ()=>{
            console.log(`Connected on port: ${PORT}`);
        });
    }   
).catch((err) => {console.log(`Error: ${err}`)});
