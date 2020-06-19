const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    sport: String,
    /* EN LA BASE DE DATOS NO VAMOS A GUARDAR LA IMAGEN, SINO LA URL DE LA UBICACION DE LA IMAGEN */
    thumbnail: String,
    date: Date,
    /* QUE USUARIO ESTA CREANDO EL EVENTO */
    user:{
        type: mongoose.Schema.Types.ObjectId,
            ref:'User'
    }
}, {
    /* USAMOS LAS PROPIEDADES VIRTUALES DE MONGODB */
    toJSON: {
        virtuals: true
    }
});

/* ESTO NOS SIRVE PARA EL FRONTEND YA QUE GENERA LA URL DE LA IMAGEN */
EventSchema.virtual('thumbnail_url').get(function(){ return `http://localhost:8000/files/${this.thumbnail}` })

module.exports = mongoose.model('Event', EventSchema)