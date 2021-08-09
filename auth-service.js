var express = require('express');
var app = express(); 
var {google} = require('googleapis');
var cors = require('cors')

const https = require('https');
const fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

app.use(cors())
  
// Constains information for auth
// TODO: insert your json file name
var key = require('./search-admin-console.json');

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
var server = https.createServer(options, app);
server.listen(443, () => {
  console.log("Server starting on port: 443")
});
