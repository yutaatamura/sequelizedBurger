var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); 

var PORT = process.env.PORT || 8080; 

var db = require("./models");

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
require("./routes/api-routes.js")(app);

//Syncing sequelize models and then starting Express app
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log(`Server listening on http://localhost: ${PORT}`);
    });    
});

