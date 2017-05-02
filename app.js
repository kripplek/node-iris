var request = require('request'),
    crypto  = require('crypto');

const VERSION = "1.0.0";

var IrisClient = function(config){
    this.config = config;
    self = this;

}

IrisClient.prototype.incident = function(plan, context){
    return self.sendReq('incidents', JSON.stringify({plan:plan,context:context}));
}

IrisClient.prototype.notify = function(role,target, subject, priority, mode, body, template, context, email_html){

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
            throw new Error('Missing both priority and mode arguments, need to at least specify one.');
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
IrisClient.prototype.sendReq= function(path, body){
  console.log(self.config);
  var words =((new Date).getTime() + "POST" + path + body);
  var headers= {'Authorization': `hmac :${self.config.app} ${crypto.createHmac('sha512', self.config.key).update(words).digest('base64')}`};
  console.log(`${self.config.url}/${path}`);

  r = request.post(
    {
            uri      :`${self.config.url}/${path}`,
            headers  : headers,
            body     : JSON.stringify(body)
    },function (error, response, body) {
      if (error) {
        return console.error('failed:', error);
      }
    console.log(body);
    });
    console.log(r);
}
module.exports= IrisClient;
