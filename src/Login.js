import React from 'react';
import './Login.css';
import logo from './imessage_img.png';
import {auth, provider} from './firebase';
import { Button } from '@material-ui/core';

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} alt="Logo" />
                <h1>iMessage</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
