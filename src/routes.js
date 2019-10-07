const express = require('express');
const SessionController = require('./controllers/SessionController');
const NoticiaController = require('./controllers/NoticiaController');

const routes = express.Router();

// routes.post('/sessions', SessionController.store);


routes.get('/noticias', NoticiaController.index);
routes.post('/noticias', NoticiaController.store);
routes.get('/noticias/:id', NoticiaController.show);
routes.put('/noticias/:id', NoticiaController.update);
routes.delete('/noticias/:id', NoticiaController.destroy);

module.exports = routes;