let express = require('express');
let app = express();
const routes = require('./routes/index');
app.set('view engine', 'ejs');

app.use('/', routes);
app.use(express.static(__dirname + '/public'));

app.listen(8080);

console.log('Server is listening on port 8080');

module.exports = app;
