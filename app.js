var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var morgan = require('morgan');
var routes = require('./routes');
var db = require('./models').db;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.engine('html', nunjucks.render);
nunjucks.configure({
    noCache: true
});
app.set('view engine', 'html');

app.use('/', routes);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    console.error(err)
    res.status(500)
    res.send(err, err.stack)
})

app.listen(3000, function() {
    console.log("Listening on 3000")
})
