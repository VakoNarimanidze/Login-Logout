import vector from '../../src/Components/images/Vector.png'
import vector2 from '../../src/Components/images/Vector2.png'
import vector3 from '../../src/Components/images/Vector3.png'
import './Login.css'
import { useEffect, useState } from 'react'
import Profile from '../Components/profile/profile'

export default function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

     function loginButton(){
        if (email.trim() !== "" && password.trim() !== "") {
            setIsLoggedIn((prev) => !prev);
        } else {
            alert('შეავსეთ გამოტოვებული ველი');
        }
    };      
    

   
    return (
        <div>

            <div className='container' >
                <div className="img">
                    <img className='firstPic' src={vector} alt="" />
                </div>
                {isLoggedIn ? (
                    <>
                    <h1>Login</h1>
                    <h4>Hello My Friend</h4>
                    <div className="input">
                        <img src={vector2} alt="" />
                        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="input">
                        <img src={vector3} alt="" />
                        <input className='lastInput' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                        <button className='login' onClick={loginButton} >LOG IN</button>
                        </>
                    
                ) : (
                        <Profile
                            email={email}
                            setEmail={setEmail}
                            setIsLoggedIn={setIsLoggedIn}
                            setPassword={setPassword}
                        />
                    )}
                </div>

        </div>
        
    )
}