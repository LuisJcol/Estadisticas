import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    showData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showData = () => {
    let facultadArray = [];
    let inscripcionesArray = [];
    let datos = [];

    if (props.message === "facultad") {
      props.facultades.map(facultad => {
        facultadArray.push(facultad.facultad);
        return facultad;
      })

      props.inscripciones.map(inscripcion => {
        inscripcionesArray.push(inscripcion.estudiantes);
        return inscripcion;
      });

      datos = {
        labels: facultadArray,
        datasets: [
          {
            label: '# of Votes',
            data: inscripcionesArray,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }
    else {
      facultadArray.push(props.facultad);
      props.inscripciones.map(inscripcion => {
        return (inscripcion.abreviatura_periodo === props.periodo) ? inscripcionesArray.push(inscripcion.estudiantes) : inscripcion;
      });

      datos = {
        labels: facultadArray,
        datasets: [
          {
            label: '# of Votes',
            data: inscripcionesArray,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    }


    setData(datos);
    setShow(true);

  }


  return <>
    {show && <div>
      <h1>Estudiantes inscritos por {props.message}</h1>
      <div style={{ width: "350px", height: "350px" }}>
        <Pie data={data} />
      </div>
    </div>}
  </>;
}