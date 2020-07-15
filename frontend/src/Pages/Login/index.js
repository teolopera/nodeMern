/* USAMOS EL STATE PARA AGREGAR VALIDACIONES */
import React, { useState } from "react";

/* IMPORTAMOS LO QUE CREAMOS CON AXIOS */
import api from "../../Services/api";

/* IMPORTAMOS EL FORMULARIO DE REACTSTRAP */
import { Button, Form, FormGroup, Input, Container } from "reactstrap";

/* HISTORY, ES UN PARAMETRO QUE EL ROUTER NOS MANDA SOBRE LA HISTORIA DE LA NAVEGACION */
export default function Login({ history }) {
  /* SETEMAIL SERA UNA FUNCION QUE AÑADIRA EL VALOR A EMAIL */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* ESTA FUNCION TOMA UN EVENTO */
  const handleSubmit = async (evt) => {
    /* PREVENTDEFAULT, PREVIENE QUE SE REFRESQUE LA PAGINA, SE LA PASAMOS AL FORMULARIO */
    evt.preventDefault();
    console.log("Result of submit", email, password);

    /* MANDAMOS LA INFORMACION A LA API */
    const response = await api.post("/login", { email, password });

    /* OBTENEMOS LA DATA QUE NOS DEVUELVE EL BACKEND */
    const userId = response.data._id || false;

    if (userId) {
      /* USAMOS EL LOCALSTORAGE DEL NAVEGADOR PARA GUARDAR CIERTA INFORMACION */
      localStorage.setItem("user", userId);
      /* PUSH -> NOS FORZA A IR A OTRA URL */
      history.push("/dashboard");
    } else {
      const { message } = response.data;
      console.log(message);
    }
  };

  return (
    <Container>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
}