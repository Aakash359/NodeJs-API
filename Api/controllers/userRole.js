
'use strict';
const UserRole = require('../models/userRole');

// User updation actions......................................

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }
    else{
    UserRole.update(req.params.id, new UserRole(req.body), function(err, userRole) {
     if (err)
     res.send(err);
     res.json({ error:false, message: 'UserRoles successfully updated' });
  });
  }
  };