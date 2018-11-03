require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

require('./controllers/index.js')(app);

const port = 3000;

app.listen(port, () =>
{
	console.log('We are listening on port ' + port);
});