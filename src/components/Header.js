import "./header.css";
import { useNavigate } from "react-router-dom";

function Header (){
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/LoginPage');
    };

    return(
        <div className="header">
            <div className="left">
                <h1>Logo </h1>
                <ul className="header-list">
                    <li><a href='https://github.com/kpramos-hau/apsi-skills-badge'>GitHub</a></li>
                    <li><a href='#'>Sources</a></li>
                </ul>
            </div>
            <div className="right">
                <button className="header-button" onClick={handleLogin}>Sign in</button>
            </div>
        </div>
    );
}

export default Header;