'use strict';
var con = require('./../../config/db.config');

//Create Bank Api..................................................

var Bank = function(bank)
{
  this.UserType     = bank.user_type;
  this.Bank_Name     = bank.bank_name;
  this.IFSC_Code     = bank.ifsc_code;
  this.Account_No     = bank.account_no;
  this.Account_Name     = bank.account_name;
  this.Comp_id          = bank.Comp_id;
  
 };

Bank.create = function (newBank, result) {
con.query("INSERT INTO bank_name set ? ", newBank, function (err, res) {
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

// Bank deletion Api..................................................

Bank.delete = function(id, result){
  con.query("DELETE FROM bank_name table WHERE id = ?", [id], function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    result(null, res);
  }
  });
  };

//Show bank record Api........................................

Bank.findAll = function (result) {
  con.query("Select * from bank_name", function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('bank : ', res);
    result(null, res);
  }
  });
  };


module.exports= Bank;