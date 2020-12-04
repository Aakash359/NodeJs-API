'use strict';
var con = require('./../../config/db.config');

//Create user record action................................

var User = function(user)
{
  this.UserId     = user.user_id;
  this.Fname     = user.fname;
  this.Lname     = user.lname;
  this.UserType     = user.user_type;
  this.Password     = user.password;
  this.UserEmail     = user.email_id;
  
 };

User.create = function (newUse, result) {
con.query("INSERT INTO  users set ? ", newUse, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};

//Delete user record action........................................

User.delete = function(id, result){
  con.query("DELETE FROM users table WHERE id = ?", [id], function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    result(null, res);
  }
  });
  };
  

//Show user record action........................................

User.findAll = function (result) {
  con.query("Select * from users", function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('users : ', res);
    result(null, res);
  }
  });
  };

module.exports= User;