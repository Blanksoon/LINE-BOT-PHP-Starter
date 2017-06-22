<?php
$access_token = 'r+Xpxb3DpVJI3c89AJYaz40Kjv7LYKj+8EdAnS3gwv9GtHgmefm9wjjBTM2Cs2jaYLyXP0oRgw1MCisaeZ4kWhrja1PDjvlw1plYo5ewqCFzlSKhcTvu7AVEMk+mt1JxePc28R/mIEQCzCDpv6DAVAdB04t89/1O/w1cDnyilFU=XXXX';

$url = 'https://api.line.me/v1/oauth/verify';

$headers = array('Authorization: Bearer ' . $access_token);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
$result = curl_exec($ch);
curl_close($ch);

echo $result;