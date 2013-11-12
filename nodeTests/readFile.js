var fs = require("fs");
var file = fs.readFileSync("template.html", "utf8");
console.log(file);
