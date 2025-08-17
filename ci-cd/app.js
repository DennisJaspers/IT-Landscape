const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_, res) => {
  res.send('Hello from Docker + GitHub Actions CI/CD + test');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
