import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";


import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DoughnutChart from "../../components/DoughnutChart";
import PieChart from "../../components/PieChart";

const Report = () => {

    const baseUrl = "http://localhost/Backend2/index.php?c=escuelas&a=verFacultades";
    const baseUrl2 = "http://localhost/Backend2/index.php?c=escuelas&a=verEscuela";
    const baseUrl3 = "http://localhost/Backend2/index.php?c=periodos&a=verPeriodo";
    const [data, setData]=useState([]);
    const [datafacultades, setDataFacultades]=useState([]);
    const [dataescuela, setDataEscuela]=useState([]);
    const [dataperiodos, setDataPeriodo]=useState([]);

    const getFacultad = async()=>{
        await axios.get(baseUrl)
        .then(response=>{
            setDataFacultades(response.data)
            
        })
    }

    const getEscuela = async()=>{
        await axios.get(baseUrl2)
        .then(response=>{
            setDataEscuela(response.data)
        })
    }

    const getPeriodo = async()=>{
        await axios.get(baseUrl3)
        .then(response=>{
            setDataPeriodo(response.data)
        })
    }

    useEffect(()=>{
        getFacultad();
        getEscuela();
        getPeriodo();
    },[])

    return(
        <>
            <Header/>
                <Container>
                    <Row className="mt-5">
                        
                        <Col xl="12" md="10" lg="10" sm="8">
                            <Row>
                                <h2 className="text-center">Inscripciones de Estudiantes Periodo Septiembre - Diciembre 2022</h2>
                            </Row>
                            
                            
                            <Row className="py-5">
                                
                                <Col xl="6" md="6">
                                    <DoughnutChart/>
                                </Col>
                                <Col xl="6" md="6">
                                
                                    <PieChart/>
                            
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container> 
            
            <Footer/>
        </>
    );
}


export default Report;