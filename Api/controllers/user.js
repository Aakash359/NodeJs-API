'use strict';
const User = require('../models/user');

exports.create = function(req, res) {
const new_user = new User(req.body);

//User create actions..........................................

if(req.body.constructor === Object && Object.keys(req.body).length === 0)
{

  res.status(400).send({ error:true, message: 'Please provide all required field' });

}
else
{
  User.create(new_user, function(err, user) {
  if (err)
  res.send(err);
  res.json({error:false, message: "User created successfully!", data:user});
});
}
};

// User deletion actions......................................

exports.delete = function(req, res) 
{
  User.delete( req.params.id, function(err,user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'User deleted successfully' });
  });
};

  //Show all users actions.....................................

  exports.findAll = function(req, res) {
    User.findAll(function(err, user) {
      console.log('user')
      if (err)
      res.send(err);
      console.log('res', user);
      res.send(user);
    });
  };

