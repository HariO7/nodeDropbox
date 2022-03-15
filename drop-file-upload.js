require('dotenv').config()

const request = require('request');
const fs =require('fs')

const ACCESS_TOKEN  = process.env.ACCESS_TOKEN;

const filename = 'sekiro.jpg'

const content = fs.readFileSync(filename);

options = {
    method: "POST",
    url: 'https://content.dropboxapi.com/2/files/upload',
    headers: {
      "Content-Type": "application/octet-stream",
      "Authorization": "Bearer " + ACCESS_TOKEN,
      "Dropbox-API-Arg": "{\"path\": \"/YOUR_PATH_TO_FOLDER/"+filename+"\",\"mode\": \"overwrite\",\"autorename\": true,\"mute\": false}",
    },
    body:content
}

request(options,function(err,res,body){
    console.log('Err :' +err);
    console.log('Res :' +res);
    console.log('body :' +body);
})