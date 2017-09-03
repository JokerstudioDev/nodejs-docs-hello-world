const express = require('express')
var bodyParser = require('body-parser')
const app = express()

app.get('/', function (req, res) {
  res.send('API Started')
})

var port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})
