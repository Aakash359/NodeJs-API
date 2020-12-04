'use strict';
var con = require('./../../config/db.config');

var Login = function(users)
{
  this.UserEmail     = users.UserEmail;
  this.Password     = users.Password;
};
 
   
 Login.create = function (newLogin, result) {

       var sql= "SELECT * FROM users WHERE UserEmail =' "+UserEmail+"' AND Password = '"+Password+"'";                           
       
       con.query(sql, function(err, results){
         if(err) {
            console.log("error: ", err);
            result(err, null);
          }

         else{
            console.log(res.insertId);
            result(null, res.insertId);
          }

                            
       });
    } 
            


 module.exports= Login;

