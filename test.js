var ic =require('./app.js');

config = {
  app   :  "test-app",
  key   :  "sdffdssdf",
  url  :  "http://34.209.23.123:16649/v0"
}

IrisClient = new ic(config);
try{
  // Create an incident
  IrisClient.incident('demo-test-foo', {foo:"bar"});

  // create a notification
  IrisClient.notify(
      'demo-test-foo'
    );
}catch(err){
  console.log(err)
}
