require('dotenv-safe').load();
var proxy = require('express-http-proxy');
var app = require('express')();
app.use('/', proxy(process.env.PROXY_TARGET));
app.listen(process.env.PORT, function() {
  console.log('Server is running on port http://localhost:' + process.env.PORT);
});
