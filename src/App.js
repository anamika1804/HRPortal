import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login_page from "./components/Login_page";
import Signup_page from "./components/Signup_page";
import Home from "./components/Home";

function App() {
  const adminUser = {
    email: "hrhead@hr.com",
    password: "hradmin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("LOGGED IN");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!!");
      setError("Details do not match!!");
    }
  };
  const logout = () => {
    setUser({ name: "", email: "" });
  };
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login_page />} />
          <Route exact path="/signup" element={<Signup_page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*{(user.email !="")? (
        <div className="welcome">
          <h2>WELCOME, <span> HR </span></h2>
          <button onClick={logout}>logout</button>
          
        </div>
      
      ):(
      <Login_page login={Login} error={error} />
      
      )} */
