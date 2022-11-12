import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";


export default function Home(){
    
    return(
        <>
        <Header/>
        <div className="flex">
            

            <Container>
            <Row className="mt-5">
                <Col>
                    <Card className="justify-content-center align-items-center">
                        <Card.Title className="text-center mt-3 mb-3">
                            <h2>
                                Bienvenido a la App de Estadisticas de Inscripciones de URBE
                            </h2>
                        </Card.Title>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center align-items-center">
                <Col lg="8" md="10" sm="10" xs="10">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            width={50}
                            height={400}
                            src="https://media.diariorepublica.com/cms/wp-content/uploads/2014/05/URBE1.jpg"
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            width={50}
                            height={400}
                            src="https://www.urbe.edu/images/Universidad.gif"
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            width={50}
                            height={400}
                            src="https://elestimulo.com/wp-content/uploads/2014/10/100_0102-1.jpg"
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            </Container>
        </div>
        <Footer/>
        </>
    )
}