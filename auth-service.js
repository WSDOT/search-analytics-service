var express = require('express');
var app = express(); 
var google = require('googleapis');
var cors = require('cors')

app.use(cors())
  
  // Constains information for auth
  // TODO: insert your json file name
var key = require('PATH_TO_SERVICE_ACCOUNT_JSON');

var port = process.env.PORT || 3009;

var router = express.Router();

router.get('/', function(req, res) {  

  // Set up jwt client. See https://github.com/google/google-api-nodejs-client#using-jwt-service-tokens
  var jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/analytics.readonly'],
    null
  );

  // return auth result
  jwtClient.authorize(function (err, tokens) {
    if (err) {
      console.log(err);
      res.json(err)
    }
    res.json(tokens)
  })
});

// register route
app.use('/google-auth', router);

// start server
app.listen(port);
