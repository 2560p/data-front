import React, { useState } from 'react';
import './Login.css';
import NetflixLogo from '../components/NetflixLogo';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Loggin in with: ', { email, password });
    };

    return (
        <div className='loginContainer'>
            <NetflixLogo />
            <form className='loginForm'>
                <h2>Login</h2>
                <div className='labels'>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
                <i><u>Forgot your password?</u></i>
            </form>
        </div>
    )
};

export default Login;