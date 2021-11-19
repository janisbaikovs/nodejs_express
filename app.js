const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api', (req, res) => {
    res.json({
        name: 'John',
        lastname : 'Joe'
    });
});

app.get('/person/:id', (req, res) => {
    res.render('person', { ID: req.params.id, query: req.query.q})
});

app.post('/person', urlencodedParser, (req, res) => {
    res.send('welcome, ' + req.body.firstname + ' ' + req.body.lastname);
});

app.post('/personjson', jsonParser, (req, res) => {

    console.log('welcome, ' + req.body.firstname + ' ' + req.body.lastname);
});

app.listen(port);