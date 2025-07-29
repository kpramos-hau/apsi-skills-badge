import React from 'react';
import { Home, Users, Edit, ClipboardList, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import '../components/sidebar.css'; // Create this CSS file

function Sidebar({ isOpen, toggleSidebar }) { // Receive isOpen and toggleSidebar props
    return (
        <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <h2>Admin Panel</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <NavLink to="/DashboardPage/overview" onClick={toggleSidebar}>
                            <Home size={20} />
                            Overview
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/DashboardPage/add" onClick={toggleSidebar}>
                            <Users size={20} />
                            Add User
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/DashboardPage/edit" onClick={toggleSidebar}>
                            <Edit size={20} />
                            Manage Records
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/DashboardPage/report" onClick={toggleSidebar}>
                            <ClipboardList size={20} />
                            User Reports
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="sidebar-footer">
                <NavLink to="/" onClick={toggleSidebar}>
                    <LogOut size={20} />
                    Logout
                </NavLink>
            </div>
        </div>
    );
}

export default Sidebar;