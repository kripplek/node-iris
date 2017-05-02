var request = require('request'),
    crypto  = require('crypto'),
    exceptions = require('./exceptions');

const VERSION = "1.0.0";

var IrisClient = function(config){
    this.config = config;
    self = this;

}

//Report an incident
IrisClient.prototype.incident = function(plan, context){
    return self.sendReq('incidents', JSON.stringify({plan:plan,context:context}));
}

// Notification are more, "high key" and the behaviors can be very different.
// Make sure we know what we're doing here
IrisClient.prototype.notify = function(role, target, subject, priority, mode, body, template, context, email_html){

        data = {
            'role': role,
            'target': target,
            'subject': subject,
        }
        if(mode){
          data['mode'] = mode;
        }
        else{
          if(!priority){
            throw new exceptions.InvalidArgument('Missing both priority and mode arguments, need to at least specify one.');
          }
          data['priority'] = priority;
        }
        if (email_html){
          data['email_html'] = email_html
        }
        else{

            if(template && context){
                data['template'] = template
                data['context'] = context
                data['context']['iris'] = {}
                data['body'] = None
            }else{
               if(body){
                 data['body'] = body
               }
             }
        }
        return self.sendReq('notifications', JSON.stringify(data));
}
//attaches the headers and sends the request to each call.
IrisClient.prototype.sendReq= function(path, body){
  var words =`${(new Date).getTime()/5} POST ${path} ${body}`;
  var headers= {'AUTHORIZATION': `hmac:${self.config.app}:${crypto.createHmac('sha512', self.config.key).update(words).digest('base64')}`};

  r = request.post(
    {
            uri      :`${self.config.url}/${path}`,
            headers  : headers,
            body     : body
    },function (error, response, body) {
      if (error || response.status>201) {
        if(error.code = 'ENETUNREACH'){
          throw new exceptions.Unavailable(error.message, error.code);
        }
        //throw new exceptions.BadResponse('Server returned an error: '+ error);
        return console.error('failed:', error);
      }
      console.log(body);
      return true;
    });
}
module.exports= IrisClient;
