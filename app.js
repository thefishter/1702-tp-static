var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(morgan('dev'))

app.use(function(err, req, res, next) {
    console.error(err)
    res.status(500)
    res.send(err, err.stack)
})

app.listen(3000, function() {
    console.log("Listening on 3000")
})
