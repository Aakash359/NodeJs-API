'use strict';
var con = require('./../../config/db.config');

//Create registration Api..................................................

var Registration = function(registration)
{
  this.id     = registration.id;
  this.Name     = registration.First_Name;                           
  this.Email_id     = registration.email;
  this.Pan_card  = registration.pan_no;
  this.GST_no     = registration.gst_no;
  this.Org_name     = registration.org_name;
  this.OrgTag_Name    = registration.org_tag_name;
  this.Currency     = registration.Currency;
  this.Bank_Details    = registration.bank_name;
  this.Bank_AccountName     = registration.ac_name;
  this.Bank_AccountNumber     = registration.ac_number ;
  this.Bank_IFSCcode     = registration.ifsc_code;
  this.Org_Registration_no    = registration.reg_no;
  this.Primary_contact     = registration.primary_contact_no;
  this.Secondary_contact    = registration.secondary_contact_no;
  this.Address    = registration.address;
  this.City    = registration.city ;
  this.Zipcode     = registration.zipcode;
  this.TermsCond    = registration.term_con;
  this.Timezone     = registration.time_zone;
  this.Comp_code    = registration.company_code;
  this.Init_number    = registration.initial_invoice_no;
  this.Exempted_code    = registration.exempted_code;
  this.Exemp_Init_Number    = registration.exemp_Init_Number;
  
  
};

Registration.create = function (newReg, result) {
con.query("INSERT INTO registration_employee set ? ", newReg, function (err, res) {
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

module.exports= Registration;