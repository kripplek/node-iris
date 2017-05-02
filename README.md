# node-iris
This is a library for communicating with the [Iris API](https://github.com/linkedin/iris).

### Usage

`npm install node-iris`

Use:

> this will work with the pre-seeded data, created by following the [instructions](https://github.com/linkedin/iris/blob/master/README.md)

```
var ic =require('./app.js');

config = {
  app   :  "test-app",
  key   :  "sdffdssdf",
  url  :  "http://127.0.0.1:16649/v0"
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
  //do something with error
  console.log(err)
}


```

#### Contributing
License is MIT. I really don't care how the PR's come as long as I can read what the change is and you include a reason why


> This project is dedicated to amazing success and talent  of a [#nastyWoman](https://www.astronautjill.space/) [#womenInSTEM](https://twitter.com/search?q=%23womeninstem&src=tyah)
