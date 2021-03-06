/**
 * Created by natalie on 11/1/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

var calculate = require("../modules/calculation");

router.post("/data", function(req,res){
    res.send({result: calculate(req.body)});
})

router.get("/*", function(req,res){
    var file = req.params[0] || "index.html";
    res.sendFile(path.join(__dirname, "../public", file));
    //console.log("hello world");
});

module.exports = router;