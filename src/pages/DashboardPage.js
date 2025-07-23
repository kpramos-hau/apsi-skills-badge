import { Sidebar } from 'lucide-react';
import '../styles/dashboard.css'
import { useState, useEffect } from 'react'


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
        <div className="main">

            <h1>API Integration Demo (JSONPlaceholder)</h1>

            <div className='main-actions-container'>

                {/* Add user form */}
                <div className='add-user-form' style={{ marginBottom: '10px' }}>
                    <input
                    type="text"
                    value={newUserName}
                    placeholder="New user name"
                    onChange={e => setNewUserName(e.target.value)}
                    />
                    <button onClick={addUser}>Add User</button>
                </div>

                {/* Loading/Error states */}
                {loading && <p>Loading users...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}

                {/* List of users */}
                <table className='list-of-users'>
                    {users.map(user => (
                        <tr key={user.id}>
                        <td className='list-of-users-id'><strong>[{user.id}]</strong></td>
                        <td className='list-of-users-name'>{user.name}</td>
                        <td><button onClick={() => updateUser(user.id)}>Edit</button>{' '}</td>
                        <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                        </tr>
                        ))}
                </table>
            </div>
        </div>
    );
}

export default DashboardPage;

// Sidebar
{/* <div className="left-sidebar">
                <h1>DashboardPage</h1>
                <div className='left-sidebar-actions'>
                    <ul>
                        <li><a>Add</a></li>
                        <li><a>Edit</a></li>
                        <li><a>Delete</a></li>
                        <li><a>Report</a></li>
                    </ul>
                </div>
            </div> */}