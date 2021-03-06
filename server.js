var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');

var app = express(); 

var PORT = process.env.PORT || 8080; 

var db = require("./models");

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
var router = require("./controllers/burgers_controller.js");
app.use('/', router);

//Syncing sequelize models and then starting Express app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`Server listening on http://localhost: ${PORT}`);
    });    
});

