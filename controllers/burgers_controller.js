var express = require("express");
var router = express.Router();
var db = require("../models");


    router.get("/", function(req, res) {
        db.Burger.findAll({})
        .then(function(dbBurger) {
            res.render('index', {burgers: dbBurger});
        });
    });

    router.put("/burgers/:id", function(req, res) {
        var id = req.params.id;
        console.log(id);
        db.Burger.update({
            devoured: 1
        }, 
        {
            where: {
                id: id
            }
        }).then(function(dbBurger) {
            res.redirect(303, '/');
            
        });
    });

    router.post("/burgers", function(req, res) {
        console.log(req.body);
        db.Burger.create({
            burger_name: req.body.burger
        })
        .then(function(dbBurger) {
            // res.redirect('/');
            // res.status(200).end();
        });
    });

    router.delete("/burgers/delete/:id", function(req, res) {
        var id = req.params.id;
        db.Burger.destroy({
            where: {
                id: id
            }
        }).then(function() {
            res.redirect('/');
            
        });
    });

    module.exports = router;




