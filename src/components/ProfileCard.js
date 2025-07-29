import "./profileCard.css";
import  BlankProfile from "../images/blankProfile.svg";
import 'animate.css';


function ProfileCard({ name, email, role, github }){
    const handleClick = () => {
    window.open(github, '_blank');
    };
    return(
        <div className="cards" onClick={handleClick} >
            <img className="profile-img" src={BlankProfile} alt="Profile" />
            <div className="profile-information">
                <p className="profile-info " id="name">{name}</p>
                <p className="profile-info profile-info role-tag" id="role">
                    <span className="dot"></span>
                    {role}</p>
                <p className="profile-info " id="email">{email}</p>
            </div>
        </div>
    );
}

export default ProfileCard;