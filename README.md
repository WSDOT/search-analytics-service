## WSDOT Search Analytics Service for server-side Authorization
Node service for generating auth tokens for a Google Analytics account.

This project uses the [google-api-nodejs-client](https://github.com/google/google-api-nodejs-client) library for authorizing and generating JSON Web Tokens.

**IMPORTANT:** No steps are taken to protect the JWT this server provides. The token grants read-only privileges and will expire, so this shouldn't be an issue.

## Set Up

You will need to set up a service account in the google developer console for this project to generate a JWT. 
See Service Accounts at https://developers.google.com/analytics/devguides/reporting/core/v4/authorization#service_accounts

Once created, download the service account's public/private key as a JSON file and add it to the root of this project. Make sure update the import path in auth-service.js.


#### Readings from Google
* [JWT service tokens using google api node library](https://github.com/google/google-api-nodejs-client#using-jwt-service-tokens)
* [Service Accounts](https://cloud.google.com/iam/docs/service-accounts?hl=en_US&_ga=1.235576833.1415221819.1465324156)
