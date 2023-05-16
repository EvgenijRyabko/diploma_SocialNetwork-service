const express = require('express');
const bp = require('body-parser');
const appRoutes = require('./src/routes/router');
require('dotenv').config();

const app = express();
const PORT = process.env.APP_PORT || 6060;

app.use('/api', appRoutes);
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`app started at adress: http://localhost:${PORT}`);
});
