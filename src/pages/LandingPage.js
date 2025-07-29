import React from "react";
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import '../styles/landing.css'
import { LogInIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Github } from "lucide-react";
import 'animate.css';


function LandingPage(){
    const navigate = useNavigate();

    const handleLogin = () =>{
        navigate('/LoginPage');
    };
    
    const people = [
        {
        name: "Kevin Zeke Ramos",
        email: "kzekeramos@gmail.com",
        role: "Developer",
        github: "https://github.com/kevinzekee"
        },
        {
        name:"Jerney Bryant Macayanan",
        email: "jbmac0925@gmail.com ",
        role: "Developer",
        github: "https://github.com/rejj0925"
        },
        {
        name: "Juan Miguel Soriano",
        email: "jmmsorianoii@gmail.com",
        role: "Developer",
        github: "https://github.com/MiggieeS"
        },
        {
        name: "Gabriel Pagcu",
        email: "gvpagcu@student.hau.edu.ph",
        role: "Developer",
        github: "https://github.com/grabzilla"
        
        },
        {
        name: "Julian Mathew Guintu",
        email: "jmm.guintu@gmail.com",
        role: "Developer",
        github: "https://github.com/jiuuzxc"
        }
    ];

    return(
        <div className="main-container">
            <Header />
            <div className="main">
                <div className="main-content">
                    <div className="left-content">
                        <div className="left-text">
                            <h1 className="hero-text animate__animated animate__fadeIn animate__faster">React Web Application</h1>
                            <p className="animate__animated animate__fadeIn animate__faster">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit a aliquam ipsum adipisci eius consequatur asperiores, cupiditate possimus tenetur exercitationem dolorum iusto placeat excepturi quo vel? Reiciendis sunt est alias?</p>
                            <div className="button-group">
                                <button className="header-button" onClick={handleLogin}>Sign in</button>
                                <div className="vertical-line"></div>
                                <a href='https://github.com/kpramos-hau/apsi-skills-badge'><Github size={30}/></a>
                            </div>
                        </div>  
                        <p className="darker-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="about" id="about">
                    <h1>About Us</h1>
                    <p className="darker-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <div className="cards-container">
                        {people.map(person => (
                            <ProfileCard 
                            key={person.email} 
                            name={person.name}
                            email={person.email}
                            role={person.role} 
                            github={person.github}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default LandingPage;
