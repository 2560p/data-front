import { useState } from 'react';
import './Login.css';
import NetflixLogo from '../../components/NetflixLogo';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: any) => {
        e.preventDefault();

        // send the auth in json to localhost:8080/auth/admin/login
        fetch('http://localhost:8080/auth/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                if (response.ok) {
                    // store the token in local storage
                    response.json().then((data) => {
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('refresh_token', data.refresh_token);
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
