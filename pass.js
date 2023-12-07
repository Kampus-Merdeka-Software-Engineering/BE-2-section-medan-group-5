
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.post('/login', (req, res) => {
  const name = req.body.name;
  const email = req.body.name;
  const password = req.body.password;

  if (password === process.env.SECRET_KEY) {
    res.send('Login successful');
  } else {
    res.send('Internal server error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App Online on http://localhost: ${PORT}`);
});
