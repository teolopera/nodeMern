import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* IMPORTAMOS LOS COMPONENTES - EL INDEX SE IMPORTA SOLO */
import Login from './Pages/Login/';
import Dashboard from './Pages/Dashboard/';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/dashboard' component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}