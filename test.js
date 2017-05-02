var ic =require('./app.js');

config = {
  app   :  "OAP",
  key   :  "c20b6277b0dc556ed87668b6a53822e8cbfc2545a6d846228931a3e7f731d2f7",
  url  :  "http://34.209.23.123:16649/"
}

IrisClient = new ic(config);
IrisClient.incident('demo-test-foo', {foo:"bar"});
