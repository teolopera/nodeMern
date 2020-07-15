import React from 'react';

export default function Dashboard(){

    /* TRAEMOS EL ID DEL USUARIO QUE ESTA CONECTADO DESDE EL LOCALSTORAGE */
    const user_id = localStorage.getItem('user');
    console.log(user_id)

    return(
        <div>
            Hello from Dashboard
        </div>
    )
}