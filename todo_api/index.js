var express = require('express');
var todoRoutes = require('./routes/todo');
var bodyParser = require('body-parser');
var app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/todo', todoRoutes);

app.get('/', function(req,res) {
    res.send('Sending response from main route');
})

app.listen(PORT, function () {
    console.log('App is running on port : ' + PORT);
})
