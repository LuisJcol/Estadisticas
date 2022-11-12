import { Container, Row, Col, Table, Modal} from "react-bootstrap";
//import { getUsers } from "../../api/request";


import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as FaIcons from 'react-icons/fa';
import { useEffect, useState } from "react";
import axios from "axios";




const PermisologyUser = () => {

    
    const baseUrl = "http://localhost/Backend2/index.php?c=usuarios&a=ver";
    const baseUrl2="http://localhost/Backend2/index.php?c=roles&a=ver";
    const baseUrl3="http://localhost/Backend2/index.php?c=personas&a=ver";
    const [data, setData]=useState([]);
    const [dataroles, setDataRoles]=useState([]);
    const [datapersonas, setDataPersonas]=useState([]);
    const [selected, setSelected]=useState({
        id: '',
        idpersona: '',
        idrol: '',
        estado_activo: '',
        password: ''
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange=e=>{
        const {name, value}=e.target;
        setSelected((prevState)=>({
            ...prevState,
            [name]: value
        }))
        // console.log(selected);
    }

    const getRoles=async()=>[
        await axios.get(baseUrl2)
        .then(response=>{
            setDataRoles(response.data);
            // console.log(response.data)
        })
    ]

    const getPersonas=async()=>[
        await axios.get(baseUrl3)
        .then(response=>{
            setDataPersonas(response.data);
        })
    ]

    const getUsers = async()=>{
        await axios.get(baseUrl)
        .then(response=>{
            setData(response.data)
        })
    }

    useEffect(()=>{
        getUsers();
        getRoles();
        getPersonas();
    },[])


//    const Edit = (id) => {
//     console.log(id)
//     handleShow()
//    }

//    const Edit = async event => {
//     let user = await data.find(user => user.id === parseInt(event.target.id));
//     console.log(user);
//     console.log(event)
//     handleShow();
//     }

    const Edit = async id => {
        let user = await data.find(user => user.id === id);
        console.log(user);
        handleShow();
    }


    

    return(
        <>
            <Header/>
            <div className="flex">

                
                <Container>
                    <h2 className="title text-center mt-3">Permisos de usuarios</h2>
                    <Row className="mt-5">
                        <Col md="1" lg="1" sm="auto"  ></Col>
                        <Col md="6" lg="10" sm="12" xs="4" >
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Usuario</th>
                                        <th>Tipo de Usuario</th>
                                        <th>Estado</th>
                                        <th>Opcion</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(usuarios=>(
                                        <tr key={usuarios.id}>
                                            <td>{usuarios.primerNombre + ' ' +  usuarios.primerApellido}</td>
                                            <td>{usuarios.usuario}</td>
                                            <td>{usuarios.rol}</td>
                                            <td>{usuarios.estado_usuario}</td>
                                            <td><button id={usuarios.id} onClick={(e) => Edit(usuarios.id)} className="btn btn-primary"><FaIcons.FaUserEdit></FaIcons.FaUserEdit></button></td>

                                            {/* <td><a className="btn btn-danger"><FaIcons.FaTrash></FaIcons.FaTrash></a></td> */}
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                        
                    
                        
                    
                </Container>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header className="text-center display-6">Editar Usuarios</Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label>Nombre de Usuario:</label><br/>
                            <input id="user" name="user" type="text" className="form-control" onChange={handleChange}/>
                            <label>Nombre:</label><br/>
                            <input id="idpersona" name="idpersona" type="text" className="form-control" onChange={handleChange}/>

                            {/* <select id="idpersona" name="idpersona" className="form-control">
                                <option value={0}></option>
                                {datapersonas.map(persona=>(
                                    <option key={persona.id} value={persona.id}>{persona.primerNombre}</option>
                                ))}
                                
                                    
                            </select> */}
                            <label>Estado</label><br/>
                            <select id="estado" name="estado" className="form-control">
                                <option value={0}></option>
                                <option value={"A"}>Activo</option>
                                <option value={"I"}>Inactivo</option>
                            </select>
                            <label>Contrasena:</label><br/>
                            <input id="pass1" name="pass1" type="password" className="form-control"/>
                            <label>Repetir Contrasena:</label><br/>
                            <input id="pass2" name="pass2" type="password" className="form-control"/>
                            <label>Rol:</label><br/>
                            <select id="idrol" name="idrol"  className="form-control">
                                <option value={0}></option>
                                {dataroles.map(roles=>(
                                    <option key={roles.idrol} value={roles.idrol}>{roles.rol}</option>
                                ))}
                            </select><br/>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary">Registrar</button>
                        <button className="btn btn-danger" onClick={handleClose}>Cancelar</button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Footer/>
        </>
    );
}


export default PermisologyUser;