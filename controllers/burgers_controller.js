var express = require('express');

var burger = require("../models/burger.js");

var app = express();

app.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject ={
            burgers: data
        };
        res.render("index", hbsObject);
    })
})

app.post("/api/burgers", function(req, res){
    burgers.insertOne([
        "name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result){
        res.json({id: result.insertId});
    });
});

module.exports = app;