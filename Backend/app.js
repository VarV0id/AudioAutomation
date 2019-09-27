var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
var transcriptRouter = require('./routes/transcriptRouter');

//Inicializa el framework
var app = express();
//Se activa cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Se crea la ruta para consumir el sesrvicio rest de trasncripcion.
transcriptRouter(app)
//Se escucha por el puerto 3000
app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
 });
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});
module.exports = app;
