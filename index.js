const express = require('express');
const bp = require('body-parser');
const cors = require('cors');
const router = require('./src/routes/router');

require('dotenv').config();

const app = express();
const PORT = process.env.APP_PORT || 6060;
const baseurl = '/api';

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

const { auth: authApi, users: usersApi, posts: postsApi } = router(app);

authApi(`${baseurl}/auth`);
usersApi(`${baseurl}/users`);
postsApi(`${baseurl}/posts`);

app.listen(PORT, () => {
  console.log(`app started at adress: http://localhost:${PORT}`);
});
