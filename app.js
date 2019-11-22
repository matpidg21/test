const express = require('express');
const app = express();


const db = require('./dataBase').getInstance();
db.setModels();

require('./modules/cron');

const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(busboy());
app.use(busboyBodyParser());

const {userRouter, authRouter, productRouter, orderRouter, fileRouter} = require('./routes');

// app.use(...)
//    .use(...)
//    .use(...)

app.use('/users', userRouter); 
app.use('/auth', authRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('/file', fileRouter);
// 400 to constants
app.all('*', (req, res) => {
    res.status(400).end();
});


app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log('Listen 3000...');
});


module.exports = app;
