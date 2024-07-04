// index.js
const express = require('express');
const app = express();

// Set the port to an environment variable or a default value
const PORT = process.env.PORT || 3000;

app.get('/login', (req, res) => {
  res.send('Hello World!');
});

app.get('/Youtube',(req,res)=>{
  res.send("<h2> Chai aur code </h2>");
} )

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
