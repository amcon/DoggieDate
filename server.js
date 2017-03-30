const express = require('express');
const app = express();
const path = require('path');
const webpack = require('webpack');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('dotenv').config();
const loginRoute = require('./routes/login.js');
const usersRoute = require('./routes/users.js');
const dogsRoute = require('./routes/dogs.js');
const attrRoute = require('./routes/attributes.js');
const matchRoute = require('./routes/match.js');

const isDev = process.env.NODE_ENV ? false : true;

app.use(bodyParser.json());

app.use('/login', loginRoute);
app.use('/api/users', usersRoute);
app.use('/api/dogs', dogsRoute);
app.use('/api/attributes', attrRoute);
app.use('/api/match', matchRoute);

app.use(history());

if (isDev) {
  const config = require(path.join(__dirname, '/webpack.config.js'));
  const compiler = webpack(config);
  app.use(logger('dev'));
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: config.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}
const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server is running on ${PORT}`));
