import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";


import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DoughnutChart from "../../components/DoughnutChart";
import PieChart from "../../components/PieChart";

const Report = () => {

	// Consulta para obtener el listado de facultades
	const baseUrl = "http://localhost/Backend2/index.php?c=escuelas&a=verFacultades";
	// Consulta para obtener el listado de Inscripciones por escuela
	const baseUrl2 = "http://localhost/Backend2/index.php?c=inscripciones&a=verInscripcionesEscuela";
	// Consulta para obtener el listado de periodos
	const baseUrl3 = "http://localhost/Backend2/index.php?c=periodos&a=verPeriodo";
	// const [data, setData]=useState([]);

	// const dataEscuelas = [
	// 	{ escuela: "Informatica" },
	// 	{ escuela: "Industrial" },
	// 	{ escuela: "Telecomunicaciones" },
	// 	{ escuela: "Automatizacion" },
	// 	{ escuela: "Audiovisual" },
	// 	{ escuela: "Periodismo" },
	// 	{ escuela: "RelacionesPublicas" },
	// 	{ escuela: "Contaduria" },
	// 	{ escuela: "AdmEmpresas" },
	// 	{ escuela: "Mercadeo" },
	// 	{ escuela: "BancaSeguros" },
	// 	{ escuela: "RelacionesIndustriales" },
	// 	{ escuela: "Derecho" },
	// 	{ escuela: "Diseno" }
	// ];

	const [datafacultades, setDataFacultades] = useState([]);
	const [dataperiodos, setDataPeriodo] = useState([]);
	const [inscripcionEscuela, setInscripcionEscuela] = useState([]);

	const [modo, setModo] = useState("")
	const [facultadSelected, setFacultadSelected] = useState("");
	const [periodoSelected, setPeriodoSelected] = useState(0);

	const getFacultad = async () => {
		await axios.get(baseUrl)
			.then(response => {
				setDataFacultades(response.data);
			})
	}

	const getInscripcionEscuela = async () => {
		await axios.get(baseUrl2)
			.then(response => {
				console.log(response.data)
				setInscripcionEscuela(response.data)
			})

	}

	const getPeriodo = async () => {
		await axios.get(baseUrl3)
			.then(response => {
				setDataPeriodo(response.data);
			})
	}

	const Modalidad = event => setModo(event.target.value);
	const SelectFacultad = event => setFacultadSelected(event.target.value);
	const SelectPeriodo = event => setPeriodoSelected(event.target.value);

	useEffect(() => {
		getFacultad();
		getInscripcionEscuela();
		getPeriodo();
	}, [])

	return (
		<>
			<Header />
			<Container>
				<Row className="mt-5">
					<Col xl="12" md="10" lg="10" sm="8">
						<Row>
							<form>

								<select className="form-control" name="opcion" id="opcion" onChange={Modalidad}>
									<option value="">Seleccione una Opcion</option>
									<option value="facultad">Por Facultad</option>
									<option value="escuela">Por Escuela</option>
								</select> <br />


								{modo === "facultad" && <>
									<select className="form-control" name="facultad" id="facultad" onChange={SelectFacultad}>
										<option value={0}>Seleccione una Facultad</option>
										{datafacultades.map(facultad => (
											<option key={facultad.id_facultad} value={facultad.facultad}>{facultad.facultad}</option>
										))}
									</select>
									<br />
								</>}

								{/* {modo === "escuela" && <>
									<select className="form-control" name="facultad" id="facultad" onChange={SelectFacultad}>
										<option value={0}>Seleccione una Escuela</option>
										{dataEscuelas.map(escuela => (
											<option key={escuela.escuela} value={escuela.escuela}>{escuela.escuela}</option>
										))}
									</select><br />
								</>} */}


								{facultadSelected.length > 0 ? <select className="form-control" name="periodo" id="periodo" onChange={SelectPeriodo}>
									<option value={0}>Seleccione una un Periodo</option>
									{dataperiodos.map(periodo => (
										<option key={periodo.id_periodo} value={periodo.id_periodo}>{periodo.abreviatura_periodo}</option>
									))}
								</select> : null}
							</form>
						</Row>

						{periodoSelected > 0 ? <Row className="py-5">
							<Col xl="6" md="6">
								<DoughnutChart facultades={datafacultades} inscripciones={inscripcionEscuela} message={modo} />
							</Col>
							<Col xl="6" md="6">
								<PieChart facultades={datafacultades} inscripciones={inscripcionEscuela} message={modo} />
							</Col>
						</Row> : null}
					</Col>
				</Row>
			</Container>

			<Footer />
		</>
	);
}


export default Report;