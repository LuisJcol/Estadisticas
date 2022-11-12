import { Container, Row, Col, Table, Modal} from "react-bootstrap";
//import { getUsers } from "../../api/request";


import Header from "../../components/Header";
import Footer from "../../components/Footer";
import * as FaIcons from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ErrorResponse } from "@remix-run/router";




const PermisologyUser = () => {

    const { register, handleSubmit } = useForm();
    const baseUrl = "http://localhost/Backend2/index.php?c=usuarios&a=ver";
    const baseUrl2="http://localhost/Backend2/index.php?c=roles&a=ver";
    const baseUrl3="http://localhost/Backend2/index.php?c=personas&a=ver";
    const baseUrl4="http://localhost/Backend2/index.php?c=usuarios&a=modificar";
    const [data, setData]=useState([]);
    const [dataroles, setDataRoles]=useState([]);
    const [datapersonas, setDataPersonas]=useState([]);

    const [usuario, setUsuario] = useState([]);
    const [username, setUsername] = useState([]);
    const [persona, setPersona] = useState([]);
    const [estado, setEstado] = useState([]);
    const [rol, setRol] = useState([]);
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


        

    const Edit = async id => {
        let user = await data.find(user => user.id === id);
        setUsuario(user.id)
        setUsername(user.usuario)
        setPersona(user.primerNombre + ' ' + user.primerApellido )
        console.log(user);
        handleShow();
    }

    const modificarUsuarios = async data => {

        if(estado === ''){
            alert("El campo de estado de usuario no puede estar vacio");
        } else {
            var f = new FormData();
            f.append("usuario", data.usuario);
            f.append("password", data.password);
            f.append("estado_usuario", data.estado_usuario);
            f.append("id_rol", data.id_rol);
    
            
    
            await axios.post(baseUrl4, f)
                .then(response => {
                    console.log(data)
                    console.log("Success");
                })
                .catch(error => console.log("Error = ", error))
    
                handleClose()
        }
       
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
                        <form onSubmit={handleSubmit(modificarUsuarios)} className="form-group">
                         <label>Nombre de Usuario:</label><br/> 
                         <input id="usuario" name="usuario" value={usuario} type="text" hidden={true} placeholder={usuario}  className="form-control" onChange={(e)=>setUsuario(e.target.value)} {...register("usuario")}/>
                            <input id="usuario" name="usuario" value={username} type="text" placeholder={username} disabled={true}  className="form-control" />
                            <label>Nombre:</label><br/> 
                            <input id="persona" name="persona" value={persona} type="text" placeholder={persona} disabled={true} className="form-control" {...register("idpersona")}/>
                            <label>Estado</label><br/>
                            <select id="estado_usuario" name="estado_usuario" className="form-control" onChange={(e)=>setEstado(e.target.value)} {...register("estado_usuario", {required: "El estado es requerido"})} >
                                <option value=''></option>
                                <option value={"A"}>Activo</option>
                                <option value={"I"}>Inactivo</option>
                            </select>
                            <div>{ErrorResponse.estado_usuario && <span>Estado es requerido</span>}</div>
                            <label>Contrasena:</label><br/>
                            <input id="password" name="password" type="password" className="form-control" {...register("password")}/>
                            <label>Rol:</label><br/>
                            <select id="id_rol" name="id_rol"  className="form-control" onChange={(e)=>setRol(e.target.value)} {...register("id_rol", { required: "El Rol es requerido" } )}>
                                <option value=''></option>
                                {dataroles.map(roles=>(
                                    <option key={roles.idrol} value={roles.idrol}>{roles.rol}</option>
                                ))}
                            </select><br/>
                            <div>{ErrorResponse.id_rol && <span>Rol es requerido</span>}</div>
                        </form>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-primary" onClick={handleSubmit(modificarUsuarios)}>Modificar</button>
                        <button className="btn btn-danger" onClick={handleClose}>Cancelar</button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Footer/>
        </>
    );
}


export default PermisologyUser;