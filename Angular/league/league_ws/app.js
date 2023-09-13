var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var calendarRouter = require('./routes/calendar');
var clubRouter = require('./routes/club');
var editionRouter = require('./routes/edition');
var goalsRouter = require('./routes/goals');
var leagueRouter = require('./routes/league');
var personRouter = require('./routes/person');
var playerRouter = require('./routes/player');
var positionRouter = require('./routes/position');
var resultRouter = require('./routes/result');
var rolleRouter = require('./routes/rolle');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/calendar', calendarRouter);
app.use('/club', clubRouter);
app.use('/edition', editionRouter);
app.use('/goals', goalsRouter);
app.use('/league', leagueRouter);
app.use('/person', personRouter);
app.use('/player', playerRouter);
app.use('/position', positionRouter);
app.use('/result', resultRouter);
app.use('/rolle', rolleRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;