

const express = require('express');

const app = express();

app.get('/', function(req, res){
    res.send('<h1> Hello, World! </h>');
});

app.get('/contact', function(req, res){
    res.send('Contact me at: olugbade@gmail.com');
});

app.get('/about', function(req, res){
    res.send('My name is Hack Angel, I love writing and code.');
});

app.get('/hobbies', function(req, res){
    res.send('<ul><li>Basket ball</li><li>Writing</li><li>Fishing</li><li>Driving</li></ul>');
});

app.listen(3000, function(){
    console.log('Server started on port 3000')
});