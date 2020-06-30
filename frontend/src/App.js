import React from 'react';
import './App.css';

/* REACTSTRAP */
import { Container } from 'reactstrap';

/* IMPORTAMOS ROUTES PARA USAR EL SWITCH */
import Routes from './routes';

function App() {
  return (
    <Container>
      <h1>Sport's App</h1>
      <Routes/>
    </Container>
  );
}

export default App;

/* ANOTACIONES */
/*
 * -> REACTSTRAP -> BOOTSTRAP PARA REACT
 * -> REACT ROUTER DOM 
 * 
*/
