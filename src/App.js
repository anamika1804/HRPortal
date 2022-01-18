import React, { useState } from 'react';
import Login_page from './components/Login_page';

function App() {
  const adminUser={
    email:"hrhead@hr.com",
    password:"hradmin123"
  }

  const [user,setUser]= useState({name:"", email:""});
  const[error, setError]=useState("");

  const Login= details=>{
    console.log(details);

    if(details.email==adminUser.email && details.password==adminUser.password){
      console.log("LOGGED IN");
      setUser({
        name: details.name,
        email: details.email
      });
    }else{
      console.log("Details do not match!!");
      setError("Details do not match!!");
    }
    

  }

  const logout=()=>{
    setUser({name:"", email:""});
  }
  return (
    <div className="App">
      {(user.email !="")? (
        <div className="welcome">
          <h2>WELCOME, <span> HR </span></h2>
          <button onClick={logout}>logout</button>
          
        </div>
      
      ):(
      <Login_page login={Login} error={error} />
      
      )} 
    </div>
  ); 
}

export default App;
