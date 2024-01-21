import React, { useState } from 'react';
import './SignUp.css';
import NetflixLogo from '../../components/NetflixLogo';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: any) => {
        e.preventDefault();

        // send the auth in json to localhost:8080/auth/admin/register
        fetch('http://localhost:8080/auth/admin/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password, role: 'junior' }),
        })
            .then((response) => {
                if (response.ok) {
                    // store the token in local storage
                    response.json().then((data) => {
                        localStorage.setItem('token', data.token);
                        window.location.href = '/profiles';
                    });
                } else {
                    // show an error
                    response.text().then((text) => {
                        alert(text);
                    });
                }
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
    };

    return (
        <div className='registerContainer'>
            <NetflixLogo />
            <form className='registerForm'>
                <h2>Sign Up</h2>
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
                <button type="submit" onClick={handleLogin}>
                    Sign Up
                </button>
            </form>
        </div>
    )
};

export default SignUp;
