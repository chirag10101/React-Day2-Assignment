import React, { Component } from 'react'

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            phone:'',
            address: '',
            password:''
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    OnSubmitForm = (event) => {
        event.preventDefault();
        alert(this.state.username+" "+this.state.phone+" "+this.state.address);
    }

    render() {
        return (
            <div>
                <h3>Registration Using class component</h3>
                <form onSubmit={this.OnSubmitForm}>
                    <label>Username</label>
                    <input type="text" name='username' value={this.state.username} onChange={this.handleChange}/>
                    <label>Phone</label>
                    <input type="text" name='phone' value={this.state.phone} onChange={this.handleChange}/>
                    <label>Address</label>
                    <input type="text" name='address' value={this.state.address} onChange={this.handleChange}/>
                    <label>Password</label>
                    <input type="password" name='password' value={this.state.password} onChange={this.handleChange}/><br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
