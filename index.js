var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))
app.engine('html', require('ejs').renderFile);

require('./app/routes.js')(app);

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
