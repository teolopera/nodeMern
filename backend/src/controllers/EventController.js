const Event = require('../models/Event');
const User = require('../models/User');

module.exports = {

    async createEvent(req, res){

        const { title, description, price, sport } = req.body;
        console.log(req.headers)
        const { userid } = req.headers;
        /* IMAGEN */
        const { filename } = req.file;

        const user = await User.findById(userid)

        if(!user){
            return res.status(400).json({message: 'User does not exist.'})
        }

        const event = await Event.create({
            title,
            description,
            sport,
            price: parseFloat(price),
            user: userid,
            thumbnail: filename
        })

        return res.json(event);
    },

    async deleteEvent(req, res){

        const { eventId } = req.params;

        try {
            await Event.findByIdAndDelete(eventId)
            return res.status(204).json(
                { message: 'Succesfully deleted' }
            )

        } catch (error) {
            return res.status(400).json({message: 'We do not have any event with the ID.'})
        }
    }
}