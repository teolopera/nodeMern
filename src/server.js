const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const app = express();

/* PORT */
const PORT = process.env.PORT || 8000;

/* SI ESTAMOS EN  */
if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

app.use( cors() );
app.use(express.json());

try {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('MongoDB connected');
} catch (error) {
    console.log(error);
}

app.use('/files', express.static(path.resolve(__dirname, '..', 'files')))
/* USAMOS LAS RUTAS */
app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});