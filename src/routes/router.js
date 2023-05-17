module.exports = (app) => ({
  auth: (url) => require('./auth')(app, url),
  profile: (url) => require('./profile')(app, url),
  users: (url) => require('./users')(app, url),
  posts: (url) => require('./posts')(app, url),
});
