'use strict';
const Registration = require('../models/registration');

//Registartion create actions...........................................................

exports.create = function(req, res) {
const new_registration = new Registration(req.body);

if(req.body.constructor === Object && Object.keys(req.body).length === 0)
{

  res.status(400).send({ error:true, message: 'Please provide all required field' });

}
else
{
  Registration.create(new_registration, function(err, registration) {
  if (err)
  res.send(err);
  res.json({error:false, message: "Registartion done successfully!", data:registration});
});
}
};



