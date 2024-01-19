import React, { useState } from 'react';
import './Login.css';
import NetflixLogo from '../../components/NetflixLogo';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login in with: ', { email, password });
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
                <div className='forgor'>
                    <a href="/resetPassword">Forgot your password?</a>
                </div>
                <button type="submit" onClick={handleLogin}>
                    Login
                </button>
                <p>Don't have an account? <a href="/register">Sign up</a></p>
            </form>
        </div>
    )
};

export default Login;