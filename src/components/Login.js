import React from 'react'
import { useState } from "react";
import Welcome from './Welcome';

export default function Login() {
    const [username, setUsername] = useState("");
    return (
        <div>
            <h3>Passing values to welcome component using props</h3>
            <form onSubmit={OnSubmitForm}>
                <label>Username</label>
                <input type='text' name='username'></input>
                <label>Password</label> 
                <input type='password' name='password'></input>
                <button type='submit' onSubmit={OnSubmitForm}>Login</button>
                <Welcome username={username}/>
            </form>
        </div>
    )
    function OnSubmitForm(e) {
        e.preventDefault()
        setUsername(e.target.username.value);
    }
}
