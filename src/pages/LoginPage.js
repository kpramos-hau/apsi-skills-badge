
import '../styles/login.css'
import { useNavigate } from "react-router-dom";


function LoginPage(){
    const navigate = useNavigate();

    const handleLanding = () => {
        navigate('/')
    }
    return(
        <div className="main-login">  
            <div className="login-element">
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
                <button className='sign-in'>Sign In</button>
                <a id="link" onClick={handleLanding} href='#'>Home</a>
            </div>
        </div>
    )
}

export default LoginPage;