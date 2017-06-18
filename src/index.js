var str = require('./constant.js');

var $ = require('jquery');

var App = function() {
    console.log(str);
    $('body').html(str);
};

var app = new App();

app.get = function() {};
