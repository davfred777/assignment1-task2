var fs = require('fs');
const path = require('path');

var express = require('express'); // Declaring Express Framework
var app = express();

app.use(express.static('build')); // Declaring the HTML Folder Paths
app.get('/m/:id', function(req, res){  //Using ID Parameter for pushing the song to front end upon requested songs
    if(req.params.id=="1")
    { 
           res.sendFile(path.join(__dirname+'/ovillo.mpeg'));
    }
    else if(req.params.id=='2'){
        res.sendFile(path.join(__dirname+'/friends.mp3'))
    }
    else if(req.params.id=='3'){
        res.sendFile(path.join(__dirname+'/goodbye-my-lover.mp3'))
    }
    else if(req.params.id=='4') {
        res.sendFile(path.join(__dirname+'/hurt-me-tomorrow.mp3'))
    }
    else if(req.params.id=='5') {
        res.sendFile(path.join(__dirname+'/GOT.mpeg'))
    }
    else  {
        res.sendFile(path.join(__dirname+'/file.ogg'))
    }   
});

app.listen(3000, function () {              // Setting the port to 3000
    console.log("Listening port 3000")
  });