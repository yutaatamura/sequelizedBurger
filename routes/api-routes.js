//api-routes.js: this file offers a set of routes for displaying and saving data to the db

var db = require("../models");

//Routes
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Burger.findAll({})
        .then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    app.put("/burgers/:id", function(req, res) {
        var id = req.params.id;
        console.log(id);
        db.Burger.update({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }, {
            where: {
                id: id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        });
    });

    app.post("/burgers", function(req, res) {
        console.log(req.body);
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        })
        .then(function(dbBurger) {
            res.json(dbBurger);
        })
    });





}