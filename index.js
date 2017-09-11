const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.static('static'));

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.info(`listening in port ${port}`);
});
