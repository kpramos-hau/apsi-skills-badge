import Sidebar from '../components/Sidebar';
import '../styles/dashboard.css'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import { Save } from 'lucide-react';
import '../styles/add.css'
function AddPage(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newUserName, setNewUserName] = useState('');
    const API_URL = 'https://jsonplaceholder.typicode.com/users';


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
    return (
        <div className="add-actions-container">
            <h1>Add User</h1>
            <div className='add-form-container'>
                <form className='add-form' onSubmit={'#'}>
                    <input className='input-form' type="number" name="id"required placeholder='ID'/>
                    <input className='input-form' type="text" name="name"required placeholder='Name' />
                    <input className='input-form' type="text" name="username"required placeholder='Username'/>
                    <input className='input-form' type="email" name="email"  required placeholder='Email'/>
                    <input className='input-form' type="text" name="company"required placeholder='Company'/>
                    <button className='input-button' type="submit"><Save/>Save</button>
                </form>
            </div>
        </div>
    );
}

export default AddPage;

            // <div className='add-user-form' style={{ marginBottom: '10px' }}>
            //     <input
            //         type="text"
            //         value={newUserName}
            //         placeholder="New user name"
            //         onChange={e => setNewUserName(e.target.value)}
            //     />
            //     <button onClick={addUser}>Add User</button>
            // </div>

            // {users.length > 0 && (
            //     <div>
            //         <h3>Added Users:</h3>
            //         <ul>
            //             {users.map(user => (
            //                 <li key={user.id}>{user.name}</li>
            //             ))}
            //         </ul>
            //     </div>
            // )}