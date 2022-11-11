import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


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
                            {/* <Carousel.Caption>
                            <h3>Nuevos Productos</h3>
                            <p>Consulta nuestros nuevos productos</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            width={50}
                            height={400}
                            src="https://www.urbe.edu/images/Universidad.gif"
                            alt="Second slide"
                            />

                            {/* <Carousel.Caption>
                            <h3>Verificacion de Pagos en 10 minutos</h3>
                            <p>Pagar por internet nunca habia sido tan facil y rapido.</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            width={50}
                            height={400}
                            src="https://elestimulo.com/wp-content/uploads/2014/10/100_0102-1.jpg"
                            alt="Third slide"
                            />

                            {/* <Carousel.Caption>
                            <h3>Contamos con Delivery</h3>
                            <p>Delivery en cualquier parte del pais</p>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            </Container>
        </div>
        {/* <Container>
        
            <Row className="mt-5">
                <Col>
                    <Card className="justify-content-center align-items-center">
                        <Card.Title className="text-center mt-3 mb-3">
                            <h2>
                                Bienvenido a la Tienda X Online
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
                            src="https://i1.wp.com/globalmedia-it.com/wp-content/uploads/2017/11/1.jpg?fit=800%2C500&ssl=1"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Nuevos Productos</h3>
                            <p>Consulta nuestros nuevos productos</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            width={50}
                            height={400}
                            src="https://www.muycomputerpro.com/wp-content/uploads/2017/06/medios-de-pago.jpg"
                            alt="Second slide"
                            />

                            <Carousel.Caption>
                            <h3>Verificacion de Pagos en 10 minutos</h3>
                            <p>Pagar por internet nunca habia sido tan facil y rapido.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            width={50}
                            height={400}
                            src="http://revistacontactord.com/wp-content/uploads/2020/06/QvZAo21QJv5QjzsAUsmm.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Contamos con Delivery</h3>
                            <p>Delivery en cualquier parte del pais</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
    </Container>  */}
        <Footer/>
        </>
    )
}