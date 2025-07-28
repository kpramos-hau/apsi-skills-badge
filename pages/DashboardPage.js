import Sidebar from '../components/Sidebar';
import '../styles/dashboard.css';
import React, { useState } from 'react'; // Import React and useState
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react'; // Import Menu icon

function DashboardPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='main-content-container'>
            <div className="hamburger-menu" onClick={toggleSidebar}> {/* Hamburger icon */}
                <Menu size={30} color="Purple" />
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> {/* Pass isOpen and toggleSidebar to Sidebar */}
            <main className={`admin-content-container ${isSidebarOpen ? 'shifted' : ''}`}> {/* Add shifted class */}
                <Outlet className="admin-content"/>
            </main>
        </div>    
    );
}

export default DashboardPage;