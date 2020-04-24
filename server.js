// Imports
const express = require('express');
const webRoutes = require('./routes/web');
const cors = require('cors');

// Express app creation
const app = express();

// Configurations
const appConfig = require('./configs/app');


// Receive parameters from the Form requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.header('Content-Type', 'application/json')
     next();
});

// Routes
app.use('/', webRoutes);

// App init
app.listen(appConfig.expressPort, () => {
  console.log(`Server is listenning on ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`);
});
