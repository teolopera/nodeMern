import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

/* IMPORTAMOS LOS COMPONENTES - EL INDEX SE IMPORTA SOLO */
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import EventsPage from './Pages/EventsPage';

export default function Routes(){

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/events' component={EventsPage} />
            </Switch>
        </BrowserRouter>
    )
}