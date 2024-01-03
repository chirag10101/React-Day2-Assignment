import React from 'react';
import { useState } from "react";
import Welcome1 from './Welcome1';
import LoginContext from '../context';

export default function Login1() {
    const [username, setUsername] = useState("");
    return (
        <div>
            <h3>Passing values to welcome component using context </h3>
            <form onSubmit={OnSubmitForm}>
                <label>Username</label>
                <input type='text' name='username'></input>
                <label>Password</label> 
                <input type='password' name='password'></input>
                <button type='submit' onSubmit={OnSubmitForm}>Login</button>
                <LoginContext.Provider value={username}>
                    <Welcome1/>
                </LoginContext.Provider>
            </form>
        </div>
    )
    function OnSubmitForm(e) {
        e.preventDefault()
        setUsername(e.target.username.value);
    }
}


