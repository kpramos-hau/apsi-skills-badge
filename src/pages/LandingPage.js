import React from "react";
import '../styles/landing.css'
import { LogInIcon } from "lucide-react";
import  BlankProfile from "../images/blankProfile.svg";
import { useNavigate } from "react-router-dom";

function LandingPage(){
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/LoginPage');
    };

    return(
        <div className="main-container">
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
            <div className="main">
                <div className="main-content">
                    <div className="left-content">
                        <h1>React Application</h1>
                        <div className="left-text">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit a aliquam ipsum adipisci eius consequatur asperiores, cupiditate possimus tenetur exercitationem dolorum iusto placeat excepturi quo vel? Reiciendis sunt est alias?</p>
                        </div>  
                        <button className="header-button" onClick={handleLogin}>Sign in</button>
                    </div>
                    <div className="right-content"></div>
                </div>
                <div className="about">
                    <h1>About Us</h1>
                    <div className="cards-container">
                        <div className="cards">
                            <img className="profile-img" src={BlankProfile} alt="Profile" />
                            <p>Kevin Zeke Ramos</p>
                        </div>
                        <div className="cards">
                            <img className="profile-img" src={BlankProfile} alt="Profile" />
                            <p>Your Name here</p>
                        </div>
                        <div className="cards">
                            <img className="profile-img" src={BlankProfile} alt="Profile" />
                            <p>Your Name here</p>
                        </div>
                        <div className="cards">
                            <img className="profile-img" src={BlankProfile} alt="Profile" />
                            <p>Your Name here</p>
                        </div>
                        <div className="cards">
                            <img className="profile-img" src={BlankProfile} alt="Profile" />
                            <p>Your Name here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default LandingPage;
