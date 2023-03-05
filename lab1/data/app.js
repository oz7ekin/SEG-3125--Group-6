const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

const Survey = require('./app'); // assuming you have defined the Survey model in a separate file

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/survey/results', (req, res) => {
  Survey.find({}, (err, allSurveys) => {
    if (err) {
      console.log(err);
    } else {
      res.render('results', { allSurveys: allSurveys });
    }
  });
});

app.post('/submit', function (req, res) {
  // parse form data
  const name = req.body.name;
  const email = req.body.email;
  const occupation = req.body.occupation;
  const highlight = req.body.highlight;
  const dislikes = req.body.dislikes;
  const other = req.body.other;

  // create a new survey object and save it to the database
  const newSurvey = new Survey({
    name: name,
    email: email,
    occupation: occupation,
    highlight: highlight,
    dislikes: dislikes,
    other: other
  });
  newSurvey.save((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/survey/results');
    }
  });
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
