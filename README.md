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
IrisClient.incident('demo-test-foo', {foo:"bar"});

```

#### Contributing
License is MIT. I really don't care how the PR's come as long as I can read what the change is and you include a reason why
