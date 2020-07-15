const Event = require('../models/Event');

/* CREAMOS EL DASHBOARD PARA QUE EL CONTROLLER DE EVENT NO ESTE MUY CARGADO */
module.exports = {

    async getEventById(req, res){

        const { eventId } = req.params;
        
        const event = await Event.findById(eventId)
    
        try {
            if(event){
                return res.json(event)
            }
        } catch (error) {
            return res.status(400).json({message: 'EventId does not exist.'})
        }
    },
    
    async getAllEvents(req, res){
    
        const { sport } = req.params;
        /* SI HAY ALGUN DEPORTE QUE BUSQUE LOS EVENTOS X DEPORTE, SINO RETORNA TODOS LOS EVENTOS */
        const query = sport ? { sport } : {};
    
        try {
            /* RETORNARA TODOS LOS EVENTOS */
            const events = await Event.find(query)
    
            if(events){
                return res.json(events)
            }
        } catch (error) {
            return res.status(400).json({message: 'We do not have any event yet.'})
        }
    }
}