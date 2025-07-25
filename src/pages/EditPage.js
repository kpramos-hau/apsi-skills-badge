import '../styles/edit.css'
import { useState, useEffect } from 'react'
import { Pencil, Trash, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient';


function EditPage(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newUserName, setNewUserName] = useState('');
    const [editUserId, setEditUserId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: '',
        username: '',
        email: '',
        company: ''
    });

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
      
      const startEditing = (user) => {
        setEditUserId(user.id);
        setEditFormData({
            name: user.name,
            username: user.username,
            email: user.email,
            company: user.company
        });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const saveEdit = async (id) => {
        try {
            const { error } = await supabase
                .from('users')
                .update(editFormData)
                .eq('id', id);
            if (error) throw error;

            setUsers(prev =>
                prev.map(user => (user.id === id ? { ...user, ...editFormData } : user))
            );
            setEditUserId(null);
        } catch (err) {
            alert('Failed to update user: ' + err.message);
        }
    };

    const cancelEdit = () => {
        setEditUserId(null);
    };



    // ---------- DELETE: Remove user ----------
    const deleteUser = async (id) => {
        try {
            const { error } = await supabase
                .from('users')
                .delete()
                .eq('id', id);

            if (error) throw error;

            setUsers(prev => prev.filter(user => user.id !== id));
        } catch (err) {
            alert('Failed to delete user: ' + err.message);
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
                                <td><strong>[{user.id}]</strong></td>
                                {editUserId === user.id ? (
                                    <>
                                        <td><input className="inline-input" name="name" value={editFormData.name} onChange={handleEditChange} /></td>
                                        <td><input className="inline-input" name="username" value={editFormData.username} onChange={handleEditChange} /></td>
                                        <td><input className="inline-input" name="email" value={editFormData.email} onChange={handleEditChange} /></td>
                                        <td><input className="inline-input" name="company" value={editFormData.company} onChange={handleEditChange} /></td>
                                        <td>
                                            <button onClick={() => saveEdit(user.id)}>Save</button>
                                            <button onClick={cancelEdit}>Cancel</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.company}</td>
                                        <td>
                                            <a className="edit-icon" onClick={() => startEditing(user)}><Pencil size={18}/></a>
                                            <a className="delete-icon" onClick={() => deleteUser(user.id)}><Trash size={18}/></a>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EditPage;