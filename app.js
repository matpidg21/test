const express = require('express');
const app = express();


const db = require('./dataBase').getInstance();
db.setModels();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

const {userRouter, authRouter, productRouter, orderRouter} = require('./routes');


app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);



app.all('*', (req, res) =>{
    res.status(400).end();
});


app.listen(5000, (err) => {
    if (err) console.log(err);
    console.log('Listen 5000...');
});
