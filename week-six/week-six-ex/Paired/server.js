var express = require('express');
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var fileserver = express.static('yourmom')
var routes = require('./routes.js')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(fileserver);
//console.log(routes)

routes(app);

//console.log(app);



app.listen(port,function(){
    console.log('yo!',port)
});