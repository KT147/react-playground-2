import React, { useState } from "react";

function Login() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="container">
      {isLoggedIn && <h1>Hello</h1>}
      <form className="form" onSubmit={() => setisLoggedIn(true)}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
