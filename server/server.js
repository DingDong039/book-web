const express = require("express");
const app = express();
const compression = require("compression");
const helmet = require("helmet");
const session = require("cookie-session");
const port = process.env.PORT || 8080;

// Importing dependencies
const { readdirSync } = require("fs");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// Connect to MongoDB
const connectDB = require("./Config/conndb");
connectDB();

// Middlewares
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// const expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
// app.use(session({
//   name: 'session',
//   keys: ['key1', 'key2'],
//   cookie: {
//     secure: true,
//     httpOnly: true,
//     domain: 'example.com',
//     path: 'foo/bar',
//     expires: expiryDate
//   }
// }))

readdirSync("./Routes").map((r) => app.use("/api", require(`./Routes/${r}`)));

app.listen(port, () => {
  console.log(`Server is running at <http://localhost:${port}>`);
});
