const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;



//Setup the views engine
app.set('view engine', 'ejs');
app.set('views',  './views');



app.listen(port, () => {
    console.log(`Connected on port ${port}`)
})