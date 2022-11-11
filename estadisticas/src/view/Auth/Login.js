import React, { useContext, useState } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { makeLoginData } from "../../api/request";
import { AuthContext } from './../../context/AuthContext';


export default function Login() {

	const [loader, setLoader] = useState(false);
	const [usuario, setUsuario] = useState("");
	const [password, setPassword] = useState("");

	const { signIn } = useContext(AuthContext);

	const makeRequest = async () => {
		setLoader(true);

		if (usuario === "") {
			alert("El campo usuario no puede estar vacio");
		} else if (password === "") {
			alert("El campo contrasena no puede estar vacio")
		} else {

			const token = await makeLoginData(usuario, password);
			console.log("token", token);
			// signIn(res);
			// window.localStorage.setItem("token", res)
		}
		setLoader(false);
	}

	return (
		<Container >
			<Row className="justify-content-center align-items-center minh-80" >

				<Col lg="8" md="10" sm="10" xs="10">
					<Card className="justify-content-center align-items-center rounded-card bg-dark">
						<Card.Body className="">
							<Card.Title className="mt-3 display-6 text-center">Inicio de Sesion</Card.Title>

							<label className="align-left" >Usuario:</label>
							<input type="text" className="form-control"
								value={usuario}
								onChange={(val) => setUsuario(val.target.value)}
							/>
							<label className="align-left" >Contraseña:</label>
							<input className="form-control"
								type="contrasena"
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
										<Button onClick={() => makeRequest()} className="btn btn-success mt-3">Iniciar Sesion</Button><br></br>
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