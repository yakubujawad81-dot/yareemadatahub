const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Sannu! Yareema Data Hub is Live!</h1><p>Wannan shi ne farkon ginin website dinka.</p>');
});

app.listen(port, () => {
  console.log('Server is running');
});
