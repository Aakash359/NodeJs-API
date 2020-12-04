'use strict';
const Customer = require('../models/customer');

//Customer create actions...........................................................

exports.create = function(req, res) {
const new_customer = new Customer(req.body);

if(req.body.constructor === Object && Object.keys(req.body).length === 0)
{

  res.status(400).send({ error:true, message: 'Please provide all required field' });

}
else
{
  Customer.create(new_customer, function(err, customer) {
  if (err)
  res.send(err);
  res.json({error:false, message: "Customer inserted successfully!", data:customer});
});
}
};

// Customer deletion actions...........................................................

exports.delete = function(req, res) 
{
  Customer.delete( req.params.id, function(err,customer) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Customer successfully deleted' });
  });
  };

//Customer data fetching actions......................................................


exports.findAll = function(req, res) {
  Customer.findAll(function(err, customer) {
    console.log('customer')
    if (err)
    res.send(err);
    console.log('res', customer);
    res.send(customer);
  });
};