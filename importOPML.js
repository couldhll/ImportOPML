var feedly = require ('./node-feedly/lib/feedly');
var request = require('request');

// init feedly
var f = new feedly ({
  client_id: 'feedly',
  client_secret: '0XP4XQ07VVMDWBKUHTJM4WUQ',
  port: 8080
});
// var f = new feedly ({
//   client_id: 'sandbox',
//   client_secret: 'YNXZHOH3GPYO6DF7B43K',
//   base: 'http://sandbox.feedly.com',
//   port: 8080
// });

var oneSecond = 1000 * 60 * 60 * 24; // one day
setInterval(function() {
  console.log('111');
  // import opml
  request('https://github.com/tangqiaoboy/iOSBlogCN/raw/master/blogcn.opml', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      f.importOPML(body).then(function(results) {
        console.log(results);
      },
      function (error) {
        console.log(error);
      });
    }
  });
}, oneSecond);
