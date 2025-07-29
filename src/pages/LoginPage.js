import { Navigation } from 'lucide-react';
import '../styles/login.css'
import { useNavigate } from "react-router-dom";
import 'animate.css';

function LoginPage(){
    // Navigation
    const navigate = useNavigate();

    const handleLanding = () => {
        navigate('/')
    }

    const handleDashboard = () => {
        navigate('/DashboardPage');
    }
    // Navigation
    return(
        <div className="main-login ">  
            <div className="login-element animate__animated animate__fadeIn animate__faster">
                <h1>Login</h1>
                <div className='input-container'>
                    <input className='text-box' type="text" placeholder="Username"></input>
                    <input className='text-box' type="password" placeholder="Password"></input>
                </div>
                <div className='options'>
                    <div className='options-left'>
                        <input type='checkbox'></input><label id="link" >Remember Me?</label>
                    </div>
                    
                    <a id="link" href='#'>Forgot Pasword?</a>
                </div>
                <button className='sign-in' onClick={handleDashboard}>Sign In</button>
                <a id="link" onClick={handleLanding} href='#'>Home</a>
            </div>
        </div>
    )
}

export default LoginPage;