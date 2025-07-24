// import { Sidebar } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import '../styles/dashboard.css'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import "../styles/dashboard.css"

function DashboardPage(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newUserName, setNewUserName] = useState('');
    const API_URL = 'https://jsonplaceholder.typicode.com/users';

    // ---------- GET: Fetch all users ----------
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch users');
        const data = await res.json();
        setUsers(data);
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };

    // ---------- POST: Add new user ----------
    const addUser = async () => {
        try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newUserName }),
        });
        const newUser = await res.json();
        setUsers(prev => [...prev, newUser]);
        setNewUserName('');
        } catch (err) {
        alert('Failed to add user.');
        }
    };

    // ---------- PUT: Update user name ----------
    const updateUser = async (id) => {
        const updatedName = prompt('Enter new name:');
        if (!updatedName) return;
        try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: updatedName }),
        });
        const updated = await res.json();
        setUsers(prev =>
            prev.map(user => (user.id === id ? { ...user, name: updated.name } : user))
        );
        } catch {
        alert('Failed to update user.');
        }
    };

    // ---------- DELETE: Remove user ----------
    const deleteUser = async (id) => {
        try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        setUsers(prev => prev.filter(user => user.id !== id));
        } catch {
        alert('Failed to delete user.');
        }
    };

    // --------- Render -----------
    return(
        <div className='main-content-container'>
            <Sidebar />
            <main className='admin-content-container'>
                <Outlet className="admin-content"/>
            </main>
        </div>    
    );
}

export default DashboardPage;
