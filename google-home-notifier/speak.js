const googlehome = require('google-home-notifier')
const language = 'ja';

//googlehome.device('Google-Home', language); // 両方
//googlehome.ip('192.168.1.5', language); //googlehome mini
//googlehome.ip('192.168.1.4', language); //googlehome

//googlehome.device('Google Home', language).accent('ja').ip('192.168.1.5'); //日本語で喋る

selected_ip = process.argv[2]
googlehome.device('Google Home', language).ip(selected_ip);
msg = process.argv[3]
console.log(msg);
googlehome.notify(msg, function(res) {
  console.log(res);
  });
