const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(express.static('dist'))
app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});