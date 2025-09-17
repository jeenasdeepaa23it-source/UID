import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState(() => {
    // Load saved users from localStorage
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [currentUser, setCurrentUser] = useState(null);

  // Check login session on refresh
  useEffect(() => {
    const loggedUser = localStorage.getItem("currentUser");
    if (loggedUser) {
      setIsLoggedIn(true);
      setCurrentUser(JSON.parse(loggedUser));
    }
  }, []);

  // ---------------- Signup ----------------
  const handleSignup = (username, password) => {
    const userExists = users.find((u) => u.username === username);
    if (userExists) {
      alert("⚠️ User already exists!");
      return;
    }
    const newUser = { username, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    alert("✅ Signup successful! Please log in.");
  };

  // ---------------- Login ----------------
  const handleLogin = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
    } else {
      alert("❌ Invalid credentials!");
    }
  };

  // ---------------- Logout ----------------
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {!isLoggedIn ? (
        <>
          <h1>User Authentication System</h1><br></br>
          <Signup onSignup={handleSignup} />
          <Login onLogin={handleLogin} />
        </>
      ) : (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

// ---------------- Signup Component ----------------
function Signup({ onSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onSignup(username.trim(), password.trim());
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={submit} style={{ marginBottom: "20px" }}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />{" "}
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

// ---------------- Login Component ----------------
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onLogin(username.trim(), password.trim());
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={submit}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />{" "}
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

// ---------------- Dashboard Component ----------------
function Dashboard({ user, onLogout }) {
  return (
    <div>
      <h2>🎉 Welcome, {user.username}!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default App;
