const moviesRoutes = require('./movies/routes');

module.exports = (app) => {
    app.use(`/v1/movies`, moviesRoutes);
}
