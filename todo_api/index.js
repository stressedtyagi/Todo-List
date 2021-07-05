var express = require('express');
var todoRoutes = require('./routes/todo');
var bodyParser = require('body-parser');
var app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'))
app.use('/api/todo', todoRoutes);

app.get('/', function(req,res) {
    res.sendFile("index.html");
})

app.listen(PORT, function () {
    console.log('App is running on port : ' + PORT);
})
