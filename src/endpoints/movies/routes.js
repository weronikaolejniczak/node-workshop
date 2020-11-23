const express = require('express');

//const validators = require('./schemas');
//const validate = require('../validate');

const Router = express.Router;
const routes = new Router();

// GET /v1/movies
const getMovies = (req, res) => {
    res.json({ status: 'Hello, World!' });
};

routes.get('/', getMovies);

// POST /v1/movies
const createMovie = (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    res.json({ ok: true });
};

routes.post(
    '/',
    //validate(validators.create),
    createMovie
);

// PATCH /v1/movies
const updateMovie = (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));
    res.json({ ok: true });
};

routes.patch(
    '/',
    //validate(validators.update),
    updateMovie
);

module.exports = routes;
