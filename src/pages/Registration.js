import React from 'react'

const Registration = () => {

    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    function register(){

    }
  return (
    <div>
      <form onSubmit={register}>
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit" >Register</button>
      </form>
    </div>
  )
}

export default Registration
