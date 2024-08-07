// bree.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Docker and Node.js!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${3000}`);
});
