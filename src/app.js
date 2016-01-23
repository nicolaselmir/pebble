var UI = require('ui');
var ajax = require('ajax');
//var Accel = require('ui/accel');
//var Vibe = require('ui/vibe');


var card = new UI.Card({
  title:'time'
 // subtitle:''
});


card.show();



 var Time = new Date();
 var hours = Time.getHours();
 var minutes = Time.getMinutes();
 var URL = 'http://alltheminutes.com/tweets/' + hours +'/'+ minutes +'.json';

ajax(
  {
    url: URL,
    type: 'json'
  },
  function(id_data) {
    var len = id_data.length;
    var i =  Math.floor(Math.random() * len);
    
    var dataId = id_data[i];
    
 
 var URL2 = 'http://nodejs-evilqubit.rhcloud.com/' + dataId;   
     ajax(
  {
    url: URL2,
    type: 'json'
  },
  function(tweetsData) {
   // var len = tweetsData.length;
   // var i =  Math.floor(Math.random() * len);
    
   var dataTweets = tweetsData;
    //var d = new Date();
    card.body(dataTweets.text);
    card.title(dataTweets.user.name);
    card.subtitle('@' + dataTweets.user.screen_name);
  }
);
  }
);


