/* REQUERIMOS EL USER DEL MODELO */
const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    
    async createUser(req, res){
        try {

            /* TESTEAMOS LO QUE LLEGA POR EL BODY */
            //console.log(req.body);

            /* ESTAMOS APLICANDO DESESTRUCTURACION PARA EVITAR req.body.firstName */
            const {firstName, lastName, password, email} = req.body;

            /* REVISAMOS SI EL USUARIO EXISTE O NO */
            const existentUser = await User.findOne({email});

            if(!existentUser){
                
                /* HASHEAMOS LA CONSTRASEÑA */
                const hashedPassword = await bcrypt.hash(password, 10); 

                const user = await User.create(
                    { 
                        firstName,
                        lastName,
                        password: hashedPassword,
                        email
                    }
                );

                return res.status(200).json(user);
            }

            return res.status(400).json({
                message: 'Email/User already exist! Do you want to login instead?'
            })

        } catch (error) {
            
            throw error(`Error while registering a new user: ${error}`)

        }
    },

    async getUserById(req, res){
        
        const { userId } = req.params;

        try {
            
            const user = await User.findById(userId);
            return res.json(user)

        } catch (error) {
            
            return res.status(400).json({
                message: 'User does not exist, do you want to register instead?'
            })

        }
    }

}