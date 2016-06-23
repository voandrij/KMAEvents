
var fs = require('fs');
var ejs = require('ejs');


exports.EventMenu_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/EventMenu_OneItem.ejs', "utf8"));
