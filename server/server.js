const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Importing dependencies
const {readdirSync} = require('fs');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// Connect to MongoDB
const connectDB = require('./Config/conndb');
connectDB();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

readdirSync('./Routes').map((r) => app.use('/api', require(`./Routes/${r}`)));

app.listen(port, () => {
  console.log(`Server is running at <http://localhost:${port}>`);
});
