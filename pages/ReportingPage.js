import { useState, useEffect } from 'react'
import '../styles/reporting.css'
import { supabase } from '../supabaseClient';
import { RefreshCw } from 'lucide-react';

function ReportingPage(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const API_URL = 'https://jsonplaceholder.typicode.com/users';

    // ---------- GET: Fetch all users ----------

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        const { data, error } = await supabase.from('users').select('*');
        console.log('Fetched data:', data);
        if (error) setError(error.message);
        else setUsers(data);
        setLoading(false);
    };
    useEffect(() => {
        fetchUsers();
    }, []);



    // const fetchUsers = async () => {
    //     setLoading(true);
    //     setError(null);
    //     try {
    //     const res = await fetch(API_URL);
    //     if (!res.ok) throw new Error('Failed to fetch users');
    //     const data = await res.json();
    //     setUsers(data);
    //     } catch (err) {
    //     setError(err.message);
    //     } finally {
    //     setLoading(false);
    //     }
    // };

    return(
        <div className="main-reports-container">
            <div className="reports-header">
                <h1>Reports</h1>
                <button onClick={fetchUsers} disabled={loading} className="refresh-btn">
                    <RefreshCw size={20} />
                    {loading ? 'Refreshing...' : 'Refresh'}
                </button>
            </div>
            <div className='reports-container'>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                <table className='list-of-users'>
                    <thead>
                       <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Company</th>
                       </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                       <tr key={user.id}>
                            <td><strong>{user.id}</strong></td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.company}</td>
                       </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReportingPage;