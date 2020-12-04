
'use strict';
var con = require('../../config/db.config');

//Update userRole record action................................

var UserRole = function(user)
{
  this.UserRoleId     = user.user_role_id;
  this.Id             = user.id;
  this.RoleID         = user.role_id;
  this.CreatedBy      = user.created_by;
  
  
};

UserRole.update = function(id, userrole, result){
    con.query("UPDATE userrole SET UserRoleId=?,RoleID=?,CreatedBy=? WHERE id = ?", 
    [userrole.UserRoleId,userrole.RoleID,userrole.CreatedBy, id], function (err, res) 
    {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }else{
      result(null, res);
    }
    });
};


module.exports= UserRole;