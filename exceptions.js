// Argument problems
module.exports.InvalidArgument = function(message, code, err){
  this.message = (message)?message:"Invalid arguments supplied";
  this.code = (code)?code:100;
}

//server reply >201
module.exports.BadResponse = function(message,code, err){
  this.message = (message)?message:"The application sent a bad response: " +err.status;
  this.code = (code)?code:101;
}

//missing data if trieed to force in a catch
module.exports.BadRequest = function(message, code, err){
  this.message= (message)?message: "This request is malformed";
  this.code = (code)?code:102
}
