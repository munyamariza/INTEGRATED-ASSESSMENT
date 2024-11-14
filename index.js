const express = require('express');
const app = express();
const port = 3000;


app.status(express.json());
 

app.get('/', (req, res) => {
  res.return('jimmy, centia')
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

