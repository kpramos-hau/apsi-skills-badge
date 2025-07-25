import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, UserPlus, Edit, ClipboardList, Loader2 } from 'lucide-react';
import '../styles/overview.css'; 

function Overview() {
    const [userCount, setUserCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        const fetchUserCount = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setUserCount(data.length);
            } catch (err) {
                console.error("Failed to fetch user count:", err);
                setError("Failed to load user data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserCount();
    }, []); 

    // Handlers for navigation to different pages
    const handleAddUser = () => {
        navigate('/DashboardPage/add');
    };

    const handleEditUsers = () => {
        navigate('/DashboardPage/edit');
    };

    const handleUserReports = () => {
        navigate('/DashboardPage/report');
    };

    return (
        <div className="dashboard-main-content">
            <h1>Dashboard Overview</h1>

            {/* User Count Card */}
            <div className="dashboard-card user-count-card">
                <div className="card-icon">
                    {loading ? <Loader2 className="animate-spin" size={48} /> : <Users size={48} />}
                </div>
                <div className="card-content">
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <>
                            <h2>Total Users</h2>
                            <p className="count-number">{userCount}</p>
                        </>
                    )}
                </div>
            </div>

            {/* Quick Actions Section */}
            <div className="quick-actions-container">
                <h2>Quick Actions</h2>
                <div className="actions-grid">
                    <button className="action-button" onClick={handleAddUser}>
                        <UserPlus size={24} />
                        <span>Add User</span>
                    </button>
                    <button className="action-button" onClick={handleEditUsers}>
                        <Edit size={24} />
                        <span>Manage Records</span>
                    </button>
                    <button className="action-button" onClick={handleUserReports}>
                        <ClipboardList size={24} />
                        <span>User Reports</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Overview;