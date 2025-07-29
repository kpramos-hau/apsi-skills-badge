import "./header.css";
import { useNavigate } from "react-router-dom";
import { Github, Contact } from "lucide-react";
import Logos from "../images/appLogo(1).png"

function Header (){
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/LoginPage');
    };

    return(
        <div className="header">
            <div className="left">
                <img src={Logos} className="image-logo"></img>
                <div className="vertical-line"></div>
                <ul className="header-list">
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#'>Sources</a></li>
                    <li><a href='#about'>About</a></li>
                </ul>
            </div>
            <div className="right">
                <li><a href='https://github.com/kpramos-hau/apsi-skills-badge'><Github size={30}/></a></li>
                <div className="vertical-line"></div>
                <button className="header-button" onClick={handleLogin}>Sign in</button>
            </div>
        </div>
    );
}

export default Header;