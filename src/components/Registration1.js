import React from 'react'
import { useState } from 'react';



export default function Registration1() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    

    const OnSubmitForm = (event) => {
        event.preventDefault();
        alert(name+" "+phone+" "+address);

    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case "name":
                setName(event.target.value);
                break;
            case "phone":
                setPhone(event.target.value);
                break;
            case "address":
                setAddress(event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                break;
        }
    };

    return (
        <div>
            <h3>Registration using functional component</h3>
            <form onSubmit={OnSubmitForm}>
                <label>Name</label>
                <input type="text" name='name' value={name} onChange={handleChange}/>
                <label>Phone</label>
                <input type="text" name='phone' value={phone} onChange={handleChange}/>
                <label>Address</label>
                <input type="text" name='address' value={address} onChange={handleChange}/>
                <label>Password</label>
                <input type="password" name='password' value={password} onChange={handleChange}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}
