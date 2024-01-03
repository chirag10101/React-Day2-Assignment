import React, { useRef , useState} from 'react' 
import Welcome from './Welcome';

export default function Login2() {
    
    const [username, setUsername] = useState("");

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    function OnSubmitForm(e) {
        e.preventDefault()
        setUsername(usernameRef.current.value);
    }

  return (
    <div>
        <h3>Login using refs</h3>
        <form onSubmit={OnSubmitForm}>
            <label>Username</label>
            <input type='text'  name='username' ref={usernameRef}></input>
            <label>Password</label> 
            <input type='password' name='password' ref={passwordRef}></input>
            <button type='submit' onSubmit={OnSubmitForm}>Login</button>
            <Welcome username={username}/>
        </form>
    </div>
  )
}
