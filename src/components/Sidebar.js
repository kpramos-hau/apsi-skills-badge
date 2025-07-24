import { Link } from "react-router-dom";
import { Plus, Pencil, LayoutDashboard, ClipboardMinus, LogOut } from "lucide-react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";


function Sidebar (){
    const navigate = useNavigate();

    const handleLogout = () =>{
        navigate('/');
    }
    return(
        <nav className="sidebar">
            <div className="sidebar-header">
                <h1>Admin Panel</h1>
            </div>
            <div className="sidebar-buttons">
                <ul id="sidebar-links">
                    <li className="sidebar-links-2"><Link to="/DashboardPage/dashboard"><LayoutDashboard />Dashboard</Link></li>
                    <li className="sidebar-links-2"><Link to="/DashBoardPage/add"><Plus/>Add</Link></li>
                    <li className="sidebar-links-2"><Link to="/DashboardPage/edit"><Pencil/>Edit</Link></li>
                    <li className="sidebar-links-2"><Link to="/DashboardPage/report"><ClipboardMinus/>Reports</Link></li>
                </ul>
            </div>
            <div className="logout-container">
                <button id='logout-button' onClick={handleLogout}><LogOut/></button>
            </div>
        </nav>
    )
}

export default Sidebar;