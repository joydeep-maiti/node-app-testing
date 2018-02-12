const express = require('express');

var app = express();

module.exports.app = app;

app.get('/',(req, res)=>{
    res.send('Hello World');
});

app.get('/users', (req, res) => {
    res.send({
        name: 'Joydeep Maiti',
        age: 21,
        location: 'kolkata'
    });
});

app.listen(3000);