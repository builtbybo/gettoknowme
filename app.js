// "use strict"

// const config = require('./config');
// const express = require('express');
// var port = process.env.PORT || 5000;

// // challenge server
// const challengeServer = require('dev-challenge-server');
// const app = challengeServer.spinUp(config);

// // serve static files
// // app.use('/', express.static(__dirname + '/public'));

// app.use(express.static(__dirname));

// // server

// app.set('port', port);
// app.listen(port, function () {
//     console.log('***** app listening on port: ' + port);
// });

"use strict"

// to revert back uncomment below:
const config = require('./config');

const express = require('express');
var port = process.env.PORT || 5000;

// challenge server
const challengeServer = require('dev-challenge-server');
const app = challengeServer.spinUp(config);



// app.use(express.static(__dirname + '/public/'));

app.use(express.static(__dirname + '/public/'));

// server

app.set('port', port);
app.listen(port, function () {
    console.log('***** app listening on port: ' + port);
});

