import profilePic from '../images/User-avatar 1.png'
import './profile.css'

const Profile = ({
    email,
    setIsLoggedIn,
    setEmail,
    setPassword,
}) => {
    const LogOut = () => {
        setIsLoggedIn(true);
        setEmail("");
        setPassword("");
    };

    return (
        <div className="profileContainer">
                <h1>{email}</h1>
            <div className='imgPart' >
                <img src={profilePic} />
            </div>
                <button className='logout' onClick={LogOut}>LOG OUT</button>
        </div>
    );
};

export default Profile