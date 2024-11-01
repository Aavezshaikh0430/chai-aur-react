
import React,{ useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const[username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser}= useContext(UserContext)

    const handleSubmit =(e)=>{

        e.preventDefault();
        setUser({username , password})
    }
  return (
    <div>

        <h2>Login</h2>
        <p><input 
        type="text"
        placeholder='username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        /></p>
        <p><input
         type="text"
         placeholder='password'
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         /></p>
        <p><button onClick={handleSubmit}>Submit</button></p>
    </div>
  )
}

export default Login