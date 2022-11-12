import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';


const Sidebar = () => {

    return(
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/" className="text-light"><FaIcons.FaHome className="me-2"/> Home</Link>
                </li>
                <li>
                    <Link to="/Report" className="text-light"><FaIcons.FaChartBar className="me-2"/> Reportes</Link>
                </li>
                <li>
                    <Link to="/User" className="text-light"><FaIcons.FaUserCog className="me-2"/> Usuarios</Link>
                </li>
                <li>
                    <Link to="/" className="text-light"><FaIcons.FaLock className="me-2"/> Log Out</Link>
                </li>
            </ul>
        </div>

    );
}


//export default Sidebar