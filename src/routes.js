const express = require('express');
const multer = require('multer')

/* CONTROLLERS */
const UserController = require('./controllers/UserController')
const EventController = require('./controllers/EventController')
const uploadConfig = require('./config/upload');
const DashboardController = require('./controllers/DashboardController');
const LoginController = require('./controllers/LoginController');
const RegistrationController = require('./controllers/RegistrationController');

/* ES UN MIDDLEWARE QUE NOS PERMITE IMPORTAR RUTAS DESDE OTROS ARCHIVOS E 
INYECTARLAS A EXPRESS*/
const routes = express.Router();
/* MANEJO DE EL UPLOAD DE ARCHIVOS */
const upload = multer(uploadConfig)

routes.get('/', (req, res) => {
    res.send({ status: 200 });
})

//TODO Subscribe Controller
// TODO Aproval Controller
// TODO Rejection Controller

/* Registration */
routes.post('/registration/:eventId', RegistrationController.create)

/* Login */
routes.post('/login', LoginController.store)

/* Dashboard */
routes.get('/dashboard/:sport', DashboardController.getAllEvents)
routes.get('/dashboard', DashboardController.getAllEvents)
routes.get('/event/:eventId', DashboardController.getEventById)

/* Event */
routes.delete('/event/:eventId', EventController.deleteEvent)
routes.post('/event', upload.single('thumbnail'), EventController.createEvent)

/* User */
routes.post('/user/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)

module.exports = routes;