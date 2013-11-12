var _ = require("underscore");
var fs = require("fs");
var file = fs.readFileSync("template.html", "utf8");
// console.log(file);
var compiledTemplate = _.template(file)({name: "Names name"});

console.log(compiledTemplate);


