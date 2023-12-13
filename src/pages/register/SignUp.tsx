import React, { useState } from 'react';
import './SignUp.css';
import NetflixLogo from '../../components/NetflixLogo';

const SignUp = () => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login in with: ', { fname, lname, email, password });
    };

    return (
        <div className='registerContainer'>
            <NetflixLogo />
            <form className='registerForm'>
                <h2>Sign Up</h2>
                <div className='labels'>
                    <label>
                        First Name:
                        <input type="email" value={fname} onChange={(e) => setFName(e.target.value)} />
                    </label>
                    <label>
                        Last Name:
                        <input type="email" value={lname} onChange={(e) => setLName(e.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <button type="submit" onClick={handleLogin}>
                    Sign Up
                </button>
            </form>
        </div>
    )
};

export default SignUp;