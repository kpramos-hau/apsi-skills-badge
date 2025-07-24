import React from "react";
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import '../styles/landing.css'
import { LogInIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function LandingPage(){
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/LoginPage');
    };
    
    const people = [
        "Kevin Zeke Ramos",
        "Jerney Bryant Macayanan",
        "Juan Miguel Soriano",
        "Gabriel Pagcu",
        "Julian Mathew Guintu"
    ];

    return(
        <div className="main-container">
            <Header />
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
                        {people.map(name => (
                            <ProfileCard key={name} name={name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default LandingPage;
