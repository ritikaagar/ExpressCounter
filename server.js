var express = require("express");
var path = require("path");
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(session({ secret: 'notsosecret' }));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    if (!req.session.count) {
        req.session.count = 1;
    } else {
        req.session.count++;
    }
    res.render("index", { count: req.session.count });
})

// app.post('/counter', function(req, res) {
//         console.log("POST DATA", req.body);
//         // This is where we would add the user to the database
//         // Then redirect to the root route
//         res.redirect('/');
//     })
//     // tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});