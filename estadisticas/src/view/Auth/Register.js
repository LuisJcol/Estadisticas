import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import {makeRegisterData} from './../../api/request'

export default function Register(){

    const [loader, setLoader] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const makeRequest = async () => {
        setLoader(true);

        if(firstName === ""){
            alert("El campo Nombre no puede estar vacio")
        }else if(lastName === ""){
            alert("El campo Apellido no puede estar vacio")
        }else if(email === ""){
            alert("El campo email no puede estar vacio");
        }else if(password === ""){
            alert("El campo contrasena no puede estar vacio")
        }else{
            // console.log(email, password);
        }

        const name = firstName + ' '+ lastName;
        

        const jsn = {
            "name": name,
            "email": email,
            "password": password
          }
      
          const res = await makeRegisterData(jsn);
        //   console.log(res)


        setLoader(false);
    }

    return(

        <Container >
            <Row className="justify-content-center align-items-center minh-100 " >
                
                <Col  lg="8" md="10" sm="10" xs="10">
                    <Card className="justify-content-center align-items-center rounded-card bg-dark">
                        <Card.Body>
                            <Card.Title className="mt-3 display-6 text-center">Registro de usuario</Card.Title>
                            
                            <label className="align-left" >Nombre:</label>
                            <input type="text" className="form-control" 
                            value={firstName}
                            onChange={(val) => setFirstName(val.target.value)}
                            />
                            <label className="align-left" >Apellido:</label>
                            <input type="text" className="form-control" 
                            value={lastName}
                            onChange={(val) => setLastName(val.target.value)}
                            />
                            <label className="align-left" >Correo:</label>
                            <input type="text" className="form-control" 
                            value={email}
                            onChange={(val) => setEmail(val.target.value)}
                            />
                            <label className="align-left" >Contraseña:</label>
                            <input  className="form-control" 
                            type="password" 
                            value={password}
                            onChange={(val) => setPassword(val.target.value)}
                            />
                            <Container className="text-center">
                            {
                                    (loader) ? <>
                                        <div className="text-center mt-2">
                                            <Spinner animation="grow" variant="danger"></Spinner>
                                        </div>
                                    </> : <>
                                        <Button onClick={() => makeRequest()} className="btn btn-success mt-3">Registrarse</Button><br></br>
                                        <Row> 
                                        <span>Si ya posee una cuenta, puede iniciar sesion aqui <a href="/">ahora</a></span>
                                        </Row>
                                    </>
                            }
     
                            </Container>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}