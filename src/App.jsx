import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log(`username: ${username} password: ${password}`);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="username"
          onChange={handleUsernameChange}
        />
        <p>{username}</p>
        <input
          type="text"
          placeholder="password"
          onChange={handlePasswordChange}
        />
        <p>{password}</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}

export default App;
