import Sidebar from '../components/Sidebar';
import '../styles/edit.css'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { Pencil, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { Plus } from 'lucide-react'

function EditPage(){
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

    const navigate = useNavigate();

    const handleAdd = () =>{
        navigate('/DashBoardPage/add')
    }

    return(
        <div className='main-actions-container'>
            <div className='edit-header-container'>
                <h1>Manage Records</h1>
                <button className='add-page-button' onClick={handleAdd}><Plus size={30}/>Add User</button>
            </div>
            
            {/* Loading/Error states */}
            {loading && <p>Loading users...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        <div className='table-container'>
            {/* List of users */}
            <table className='list-of-users'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                        <td className='list-of-users-id'><strong>[{user.id}]</strong></td>
                        <td className='list-of-users-name'>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.company['name']}</td>
                        <td>
                            <a className="edit-icon"onClick={() => updateUser(user.id)}><Pencil size={18}/></a>
                            <a className="delete-icon"  onClick={() => deleteUser(user.id)}><Trash size={18}/></a></td>
                        </tr>
                        ))}
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default EditPage;