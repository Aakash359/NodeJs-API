const express = require('express');
const bodyParser = require('body-parser');
const multer = require("multer");
const upload = multer();
const app = express();

// Setup server port
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(upload.array());
app.use(express.static('public'));


// Require user routes
const Registration = require('./Api/routes/registration')

// Require customer routes
const Routes = require('./Api/routes/routes')

// Require bank routes
const bank = require('./Api/routes/bank')

// Require user routes
const user = require('./Api/routes/user')

// Require user routes
const UserRole = require('./Api/routes/userRole')

// Require login routes
const login = require('./Api/routes/login')

// using as middleware
app.use('/Api/routes/registration',Registration)
app.use('/api/v1/routes', Routes)
app.use('/Api/routes/bank', bank)
app.use('/Api/routes/user',user)
app.use('/Api/routes/userRoles',UserRole)
app.use('/Api/routes/login',login)


// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

