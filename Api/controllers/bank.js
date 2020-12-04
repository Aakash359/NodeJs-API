'use strict';
const Bank = require('../models/bank');

//Bank create actions...........................................................

exports.create = function(req, res) {
    
const new_bank = new Bank(req.body);

if(req.body.constructor === Object && Object.keys(req.body).length === 0)
{

  res.status(400).send({ error:true, message: 'Please provide all required field' });

}
else
{
  Bank.create(new_bank, function(err, bank) {
  if (err)
  res.send(err);
  res.json({error:false, message: "Bank added successfully!", data:bank});
});
}
};

// Bank deletion actions...........................................................

exports.delete = function(req, res) 
{
    Bank.delete( req.params.id, function(err,) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Bank record added successfully' });
  });
};

//Bank data fetching actions......................................................

exports.findAll = function(req, res) {
  Bank.findAll(function(err, bank) {
    console.log('customer')
    if (err)
    res.send(err);
    console.log('res', bank);
    res.send(bank);
  });
};

