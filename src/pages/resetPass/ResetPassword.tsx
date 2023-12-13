import React, { useState } from 'react';
import './ResetPassword.css';
import NetflixLogo from '../../components/NetflixLogo';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [repeat, setRepeat] = useState('');

    const handleLogin = () => {
        console.log('Login in with: ', { newPassword, repeat });
    };

    return (
        <div className='changePasswordContainer'>
            <NetflixLogo />
            <form className='changePasswordForm'>
                <h2>Reset Password</h2>
                <div className='labels'>
                    <label>
                        New password:
                        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    </label>
                    <label>
                        Repeat password:
                        <input type="password" value={repeat} onChange={(e) => setRepeat(e.target.value)} />
                    </label>
                </div>
                <button type="submit" onClick={handleLogin}>
                    Change Password
                </button>
            </form>
        </div>
    )
};

export default ResetPassword;