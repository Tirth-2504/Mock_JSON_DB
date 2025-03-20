const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

//Setup the views engine
app.set('view engine', 'ejs');
app.set('views',  './views');

//middlewares
app.use((req, res, next) => {
    const time = new Date();
    console.log(time, req.url, req.method);

    next();
});

app.get('/home', (req, res) => {
    res.send('This is always triggered secondly');
});

app.listen(port, () => {
    console.log(`Connected on port ${port}`)
})