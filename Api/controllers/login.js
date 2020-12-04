'use strict';
const Login = require('../models/login');

exports.create = function(req, res) {
const new_login = new Login(req.body);

//Customer Create Api

if(req.body.constructor === Object && Object.keys(req.body).length === 0)
{

  res.status(400).send({ error:true, message: 'Please provide all required field' });

}
else
{
  Login.create(new_login, function(err, login) {
  if (err)
  res.send(err);
  res.json({error:false, message: "You have loggedIn successfully!", data:login});
});
}
};
