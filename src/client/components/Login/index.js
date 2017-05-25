import React from 'react';
import './style.scss';

const Login = (props) => {
    return (
        <div className="login">
            <div className="login__container">
                <h2 className="login__heading">Login</h2>
                <div className="login__username">
                    <label>Username :</label>
                    <input type='text' name='username' placeholder='Type here'/>
                </div>
                <div className="login__password">
                    <label>Password :</label>
                    <input type='password' placeholder='Type here'/>
                </div>
                <div className="login__button__container">
                    <button className="login_button">Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;