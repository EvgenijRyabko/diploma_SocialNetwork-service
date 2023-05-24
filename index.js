const express = require('express');
const fileUpload = require('express-fileupload');
const apiRoutes = require('./src/routes/api');

require('dotenv').config();

const app = express();
const PORT = process.env.APP_PORT || 6060;

app.use(
  fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 1073741824, // 1GB (число в байтах)
    },
  }),
);

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`app started at adress: http://localhost:${PORT}`);
});
