import "./profileCard.css";
import  BlankProfile from "../images/blankProfile.svg";

function ProfileCard({ name }){
    return(
        <div className="cards">
            <img className="profile-img" src={BlankProfile} alt="Profile" />
            <p>{name}</p>
        </div>
    );
}

export default ProfileCard;