import line from '@line/bot-sdk'

const accessToken = 'r+Xpxb3DpVJI3c89AJYaz40Kjv7LYKj+8EdAnS3gwv9GtHgmefm9wjjBTM2Cs2jaYLyXP0oRgw1MCisaeZ4kWhrja1PDjvlw1plYo5ewqCFzlSKhcTvu7AVEMk+mt1JxePc28R/mIEQCzCDpv6DAVAdB04t89/1O/w1cDnyilFU='
const client = new line.Client({
  channelAccessToken: accessToken
});
const message = {
  type: 'text',
  text: 'Hello World!'
};

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
var json_obj = JSON.parse(Get(yourUrl));
console.log("this is the author name: "+json_obj.author_name);

client.pushMessage('<to>', message)
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err))

  console.log('hi')