/**
 * Created by Evgen on 10.09.2018.
 */


var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;


app.use(express.static('./'));

app.get('/', function (req, res) {
    res.send('Something went wrong!');
});


app.listen(PORT, function () {
    console.log('Example app listening on port 5000!');
});

