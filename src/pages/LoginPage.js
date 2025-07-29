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
        <div className="main-login">  
            <div className='left-login'>
                <h1 className='login-text-formal'>"Top #41 Country Rank in Osu! BTW."</h1>
                <div className='text-image-container'> 
                    <p>-</p>
                    <img src="https://a.ppy.sh/12028437?1753715495.jpeg" className='img-handle' alt='MiggiePic'></img>
                    <a className='p-text-formal' href="https://osu.ppy.sh/users/12028437/" rel="noopener noreferrer"> @Miggies (Developer)</a>
                </div>
                </div>
            <div className='right-login'>
                <div className='login-container'>
                <h1 className="login-text animate__animated animate__fadeIn animate__faster">Login</h1>
                    <label className='label-text'>Username</label>
                    <input className='text-box' type="text" placeholder="Username"></input>
                    <label className='label-text'>Password</label>
                    <input className='text-box' type="password" placeholder="Password"></input>
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
        </div>
    )
}

export default LoginPage;