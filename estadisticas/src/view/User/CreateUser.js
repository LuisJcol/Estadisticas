import { Container, Row, Col, Card } from "react-bootstrap";
import * as FaIcons from 'react-icons/fa';

import Header from "../../components/Header";
import Footer from "../../components/Footer";


const CreateUser = () => {




    return (
        <>
            <Header />
            <div className="flex">

                <Container>
                    <Row className="mt-5">
                        <Col md="2">
                        </Col>
                        <Col md="8">
                            <Card className="Card">
                                <Card.Body>
                                    <div className="text-center">
                                        <Card.Title className="text-center Card-title-text">Registro de Usuarios</Card.Title>
                                    </div>
                                    <label>Nombres:</label>
                                    <input className="form-control" typeof="text" />
                                    <label>Apellidos:</label>
                                    <input className="form-control" typeof="text" />
                                    <label>Nombre de Usuario:</label>
                                    <input className="form-control" typeof="text" />
                                    <label>Correo Electronico:</label>
                                    <input className="form-control" typeof="email" />
                                    <label>Contrasena:</label>
                                    <input className="form-control" typeof="password" />
                                    <label>Repetir Contrasena:</label>
                                    <input className="form-control" typeof="password" />
                                    <div className="text-center mt-3">
                                        <Row>
                                            <Col md="3">

                                            </Col>
                                            <Col md="3">
                                                <button className="btn btn-success">
                                                    <FaIcons.FaCheck></FaIcons.FaCheck> Registrar
                                                </button>
                                            </Col>
                                            <Col md="3">
                                                <button className="mr-2 btn btn-danger">
                                                    <FaIcons.FaTrash></FaIcons.FaTrash> Borrar
                                                </button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
            <Footer />
        </>
    );
}


export default CreateUser;