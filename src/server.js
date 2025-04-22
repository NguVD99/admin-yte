
const express = require('express');
const configViewEngine = require('./config/viewEngine');
const webRouter = require('./routes/web');



const app = express();
const port = 3060; // port


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// config template engine
configViewEngine(app);


// Khai bao route
app.use('/', webRouter);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})