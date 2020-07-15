import React, { useState, useMemo } from "react";
import api from "../../Services/api";
import { Button, Form, FormGroup, Input, Container, Label } from "reactstrap";
import cameraIcon from "../../assets/camera.png";
import "./events.css";

export default function EventsPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sport, setSport] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [date, setDate] = useState("");

  /* USAMOS OTRO HOOK, CON UN CONDICIONAL ? SI LO TENEMOS : SI ES NULL */
  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  console.log(title, description, price, sport, date);

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    const user_id = localStorage.getItem("user");
    console.log(user_id);

    const eventData = new FormData();

    /* LLENAMOS EL OBJETO DE EVENTDATA CON CADA UNO DE LOS CAMPOS DEL STATE */
    eventData.append("thumbnail", thumbnail)
    eventData.append("sport", sport)
    eventData.append("title", title)
    eventData.append("price", price)
    eventData.append("description", description)
    eventData.append("date", date)

    if (
      sport !== "" &&
      title !== "" &&
      price !== "" &&
      description !== "" &&
      date !== "" &&
      thumbnail !== null
    ) {
        try {
            await api.post("/event", eventData, {headers: {user_id}})
        } catch (error) {
            Promise.reject(error)
            console.log(error.message)
        }
    }

  };

  return (
    <Container>
      <h1>Create your Event</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Upload Image:</Label>
          <Label
            id="thumbnail"
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? "has-thumbnail" : ""}
          >
            <Input
              type="file"
              onChange={(event) => setThumbnail(event.target.files[0])}
            />
            <img
              src={cameraIcon}
              style={{ maxWidth: "50px" }}
              alt={"upload icon image"}
            ></img>
          </Label>
        </FormGroup>

        <FormGroup>
          <Label>Sport:</Label>
          <Input
            id="sport"
            type="text"
            value={sport}
            placeholder={"Sport name"}
            onChange={(event) => setSport(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Title:</Label>
          <Input
            id="title"
            type="text"
            value={title}
            placeholder={"Event title"}
            onChange={(event) => setTitle(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Event description:</Label>
          <Input
            id="description"
            type="text"
            value={description}
            placeholder={"Event description"}
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Event price:</Label>
          <Input
            id="price"
            type="text"
            value={price}
            placeholder={"Event price $00.00 COP"}
            onChange={(event) => setPrice(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Event date:</Label>
          <Input
            id="date"
            type="date"
            value={date}
            placeholder={"Event price $00.00 COP"}
            onChange={(event) => setDate(event.target.value)}
          />
        </FormGroup>

        <Button type="submit">Create Event</Button>
      </Form>
    </Container>
  );
}

/* ANOTACIONES */
/*
 * Files -> [0] -> Por que no estamos subiendo varios archivos, solo necesitamos el que este en la posicion 0
 * useMemo -> Usamos este hook para hacer un preview de la imagen que estamos subiendo
 */
