const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/newtask', (req, res) => {
  res.render('pages/newtask');
});

app.get('/tasklist', (req, res) => {
  res.render('pages/tasklist');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));