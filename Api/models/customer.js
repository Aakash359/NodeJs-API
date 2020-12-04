'use strict';
var con = require('./../../config/db.config');

//Create Customers Api..................................................

var Customer = function(customer)
{
  this.Cust_id     = customer.Cust_id;
  this.Cust_salutation     = customer.Cust_salutation;
  this.First_Name     = customer.First_Name;
  this.Last_Name     = customer.Last_Name;
  this.Company_name     = customer.Company_name;
  this.Contact_Display_Name  = customer.Contact_Display_Name;
  this.Contact_Email     = customer.Contact_Email;
  this.Contact_Phone     = customer.Contact_Phone;
  this.Contact_Mobile     = customer.Contact_Mobile;
  this.Website     = customer.Website;
  this.Currency     = customer.Currency;
  this.Portal_Language     = customer.Portal_Language;
  this.Facebook    = customer.Facebook;
  this.Twitter     = customer.Twitter;
  this.Bill_Attention     = customer.Bill_Attention ;
  this.Bill_Country     = customer.Bill_Country;
  this.Bill_Address     = customer.Bill_Address;
  this.Bill_City     = customer.Bill_City;
  this.Bill_State    = customer.Bill_State;
  this.Bill_zipcode     = customer.Bill_zipcode;
  this.Bill_Phone     = customer.Bill_Fax;
  this.Bill_Fax    = customer.Bill_Fax ;
  this.Ship_Country     = customer.Ship_Country;
  this.Ship_Address     = customer.Ship_Address;
  this.Ship_City     = customer.Ship_City;
  this.Ship_State     = customer.Ship_State;
  this.Ship_zipcode     = customer.Ship_zipcode;
  this.Ship_Fax    = customer.Ship_Fax;
  this.Remarks    = customer.Remarks;
  
};

Customer.create = function (newCus, result) {
con.query("INSERT INTO customer_details set ? ", newCus, function (err, res) {
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
// Customers deletion Api..................................................

Customer.delete = function(id, result){
  con.query("DELETE FROM customer_details table WHERE id = ?", [id], function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    result(null, res);
  }
  });
  };


  
//Show customer record Api........................................

Customer.findAll = function (result) {
  con.query("Select * from customer_details", function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('customer : ', res);
    result(null, res);
  }
  });
  };


module.exports= Customer;