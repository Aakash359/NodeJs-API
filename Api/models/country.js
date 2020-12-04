'use strict';
var connection = require('../../database/db');


var Country = function(item)
{
this.user_id = item.user_id
this.user_type = item.user_type;
};


Country.create = function (gstList, result) {
connection.query("SELECT * FROM countryvalue", countryList, function (err, res) {
if (err) throw err;
var response={};
var arr=[];
res.forEach(a => {
response={label:a.CountryPerscent, value:a.id};
arr.push(response);
});




return result(null, arr);
});
};

module.exports = Country;