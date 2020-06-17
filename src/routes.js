const express = require('express');
const multer = require('multer')

const UserController = require('./controllers/UserController')
const EventController = require('./controllers/EventController')
const uploadConfig = require('./config/upload');

/* ES UN MIDDLEWARE QUE NOS PERMITE IMPORTAR RUTAS DESDE OTROS ARCHIVOS E 
INYECTARLAS A EXPRESS*/
const routes = express.Router();
/* MANEJO DE EL UPLOAD DE ARCHIVOS */
const upload = multer(uploadConfig)

routes.get('/', (req, res) => {
    res.send({ status: 200 });
})

/* Event */
routes.get('/events')
routes.get('/event/:eventId', EventController.getEventById)
routes.post('/event', upload.single('thumbnail'), EventController.createEvent)

/* User */
routes.post('/user/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)

module.exports = routes;