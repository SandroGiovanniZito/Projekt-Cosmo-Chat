const userRoutes = require('./users');

const appRouter = (app, fs) => {

app.get('/', (req, res) => {
    res.send('Server is running on port 8000.');
  });

  userRoutes(app, fs);
};

module.exports = appRouter;