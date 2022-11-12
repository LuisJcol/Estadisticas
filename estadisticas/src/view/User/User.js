import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import axios from "axios";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


const User = () => {
	const { register, handleSubmit } = useForm();

	const baseUrl = "http://localhost/Backend2/index.php?c=roles&a=ver";
	const baseUrl2 = "http://localhost/Backend2/index.php?c=personas&a=ver";
	const baseUrl3 = "http://localhost/Backend2/index.php?c=usuarios&a=guardar";
	const [dataroles, setDataRoles] = useState([]);
	// const [data, setData] = useState([]);
	const [datapersonas, setDataPersonas] = useState([]);
	// const [selected, setSelected] = useState({
	// 	usuario: '',
	// 	idpersona: '',
	// 	idrol: '',
	// 	correo: '',
	// 	password: '',
	// 	guardar: ''
	// });

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	/*const registerUser=async()=>[
			await axios.post(baseUrl)
			.then(response=>{
					setData(response.data);
			})
	]*/


	const getRol = async () => [
		await axios.get(baseUrl)
			.then(response => {
				setDataRoles(response.data);
				// console.log(response.data)
			})
	]

	const getPersonas = async () => [
		await axios.get(baseUrl2)
			.then(response => {
				setDataPersonas(response.data);
				// console.log(response.data)
			})
	]

	const registrarUsuarios = async data => {
		var f = new FormData();
		f.append("usuario", data.usuario);
		f.append("password", data.password);
		f.append("idpersona", data.idpersona);
		f.append("idrol", data.idrol);

		await axios.post(baseUrl3, f)
			.then(response => {
				console.log("response", response);
			})
			.catch(error => console.log("Error = ", error))
	}


	useEffect(() => {
		getRol();
		getPersonas();
	}, [])

	return (
		<>
			<Header />

			<div className="flex">
				<Container>
					<Row className="mt-5">
						<Col md="6">
							<Card className="Card-color" >
								<Card.Body>
									<div className="text-center">
										<Card.Title className="text-center Card-title-text">Registrar Usuarios</Card.Title>
									</div>
									<div className="text-center mt-3">

										<button className="btn btn-success" onClick={handleShow} >
											<FaIcons.FaUserPlus className="display-1"></FaIcons.FaUserPlus>
										</button>

									</div>
								</Card.Body>
							</Card>
						</Col>

						<Col md="6">
							<Card className="Card-color" >
								<Card.Body>
									<div className="text-center">
										<Card.Title className="text-center Card-title-text">Lista de Usuarios</Card.Title>
									</div>
									<div className="text-center mt-3">
										<Link className="btn btn-primary" to="/UserList" >
											<FaIcons.FaUsers className="display-1"></FaIcons.FaUsers>
										</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					<Row className="mt-3">
						<Col md="12">
							<Card className="Card-color" >
								<Card.Body>
									<div className="text-center">
										<Card.Title className="text-center Card-title-text">Permisos de Usuarios</Card.Title>
									</div>
									<div className="text-center mt-3">
										<Link className="btn btn-danger" to="/PermisologyUser">
											<FaIcons.FaUserCog className="display-1"></FaIcons.FaUserCog>
										</Link>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>

				<Modal show={show} onHide={handleClose}>
					<Modal.Header className="text-center display-6">Registrar Usuarios</Modal.Header>
					<Modal.Body>
						<form onSubmit={handleSubmit(registrarUsuarios)} className="form-group">
							<label>Nombre de Usuario:</label><br />
							<input id="usuario" name="usuario" type="text" className="form-control" {...register("usuario")} />
							<label>Persona:</label><br />
							<select id="idpersona" name="idpersona" className="form-control" {...register("idpersona")}>
								<option value={0}></option>
								{datapersonas.map(personas => (
									<option key={personas.id} value={personas.id}>{personas.primerNombre} {personas.primerApellido}</option>
								))}
							</select>
							{/* <label>Correo Electronico:</label><br />
							<input id="correo_electronico" name="correo_electronico" type="text" className="form-control" {...register("correo_electronico")} /> */}
							<label>Rol:</label><br />
							<select id="id_rol" name="id_rol" className="form-control" {...register("id_rol")}>
								<option value={0}></option>
								{dataroles.map(roles => (
									<option key={roles.id} value={roles.id}>{roles.rol}</option>
								))}
							</select>
							<label>Contrasena:</label><br />
							<input id="pass1" name="pass1" type="password" className="form-control" {...register("contrasena")} />
							<label>Repetir Contrasena:</label><br />
							<input id="pass2" name="pass2" type="password" className="form-control" {...register("contrasena2")} />
						</form>
					</Modal.Body>
					<Modal.Footer>
						<button id="guardar" name="guardar" className="btn btn-primary" onClick={handleSubmit(registrarUsuarios)}>Registrar</button>
						<button className="btn btn-danger" onClick={handleClose}>Cancelar</button>
					</Modal.Footer>
				</Modal>
			</div>
			<Footer />
		</>
	);
}


export default User;