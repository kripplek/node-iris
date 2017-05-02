var ic =require('./app.js');

config = {
  app   :  "test-a",
  key   :  "sdffdssdf",
  url  :  "http://34.209.23.123:16649/v0"
}

IrisClient = new ic(config);
IrisClient.notify('demo-test-foo', {foo:"bar"});
