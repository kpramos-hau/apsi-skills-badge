import '../styles/dashboard.css'
import { useState, useEffect } from 'react'
import { Save } from 'lucide-react';
import '../styles/add.css'
import { supabase } from '../supabaseClient';


function AddPage(){
    //State to hold the for data for a new user
    const [newUser, setNewUser] = useState ({
        name: '',
        username: '',
        email: '',
        company: ''
    });
    //const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const API_URL = 'https://jsonplaceholder.typicode.com/users';

    // Handle input changes and update
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "company") {
            setNewUser(prev => ({
                ...prev,
                company: value
            }));
        } else {
            setNewUser(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };


    // ---------- POST: Add new user ---------- handle formm submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {

            const { error } = await supabase.from('users').insert([newUser])
            if (error) throw error;

            setNewUser({
                name: '',
                username: '',
                email: '',
                company: '',
            });
            alert('User added successfully!');
        } catch (err) {
            setError(err.message);
            alert('Failed to add user: ${err.message}');
        }finally {
            setLoading(false);
        }
    }; 
    return (
        <div className="add-actions-container">
            <h1>Add User</h1>
            <div className='add-form-container'>
                <form className='add-form' onSubmit={handleSubmit}>
                    <input className='input-form' type="text" name="name" required placeholder='Name' value={newUser.name} onChange={handleChange} />
                    <input className='input-form' type="text" name="username" required placeholder='Username' value={newUser.username} onChange={handleChange} />
                    <input className='input-form' type="email" name="email" required placeholder='Email' value={newUser.email} onChange={handleChange} />
                    <input className='input-form' type="text" name="company" required placeholder='Company' value={newUser.company.name} onChange={handleChange} />
                    <button className='input-button' type="submit" disabled={loading}>
                        <Save/>{loading ? 'Saving...' : 'Save'}
                    </button>
                    {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                </form>
            </div>
        </div>
    );
}

export default AddPage;
