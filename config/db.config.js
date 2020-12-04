'use strict';

var mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');


app.use(bodyparser.json());




var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"dummy_emp",

});

// Get All The Customers Details by this action

con.connect(function(error){
    if (error) throw error;
    console.log("connected");

})

module.exports = con;