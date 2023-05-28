const express = require('express');
const path = require('path');
const apiRoutes = require('./src/routes/api');

require('dotenv').config();

const app = express();
const PORT = process.env.APP_PORT || 6069;

app.use(express.json({ extended: true }));
app.use('/storage', express.static(path.join(__dirname, 'src/uploads')));
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`app started at adress: http://localhost:${PORT}`);
});
