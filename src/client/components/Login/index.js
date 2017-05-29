import React from 'react';
import { withRouter } from "react-router-dom";
import './style.scss';

const Login = ({loginState, actions, history}) => {
    const { username, password } = loginState;
    const handleUserName = username => {
        actions.loginOptions({ username : String(username).trim()});
    }
    const handlePassword = password => {
        actions.loginOptions({ password : String(password).trim()});
    }
    const onLogin = () => {
        history.push("/dashboard");
    }
    return (
        <div className="login">
            <div className="login__container">
                <h2 className="login__heading">Login</h2>
                <div className="login__username">
                    <label>Username :</label>
                    <input type='text' name='username' placeholder='Type here'
                    value={username}
                    onChange={event => handleUserName(event.target.value)}/>
                </div>
                <div className="login__password">
                    <label>Password :</label>
                    <input type='password' placeholder='Type here'
                    value={password}
                    onChange={event => handlePassword(event.target.value)}/>
                </div>
                <div className="login__button__container">
                    <button className="login_button" onClick={event => onLogin()}>Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);