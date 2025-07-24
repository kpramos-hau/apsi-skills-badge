import { useState, useEffect } from 'react'
import '../styles/reporting.css'

function ReportingPage(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
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

    return(
        <div className="main-reports-container">
            <h1>Reports</h1>
            <div className='reports-container'>
                <table className='list-of-users'>
                       <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Company</th>
                       </tr>
                    {users.map(user => (
                       <tr key={user.id}>
                            <td><strong>{user.id}</strong></td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.company['name']}</td>
                       </tr>
                    ))}
                </table>
            </div>
        </div>
    )
}

export default ReportingPage;