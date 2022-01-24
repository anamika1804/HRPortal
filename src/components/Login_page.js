import react, { useState } from "react";
import "../../src/index.css"
import { useNavigate,Link } from "react-router-dom";
function Login_page({ login, error }) {
const [details, setDetails] = useState({ email: "", password: "" });
const navigate=useNavigate()


  const submitHandler = (e) => {
    e.preventDefault();

    login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>LOG IN</h2>
        {error != "" ? <div className="error">{error}</div> : ""}

        <div className="form-group">
          <label htmlFor="email">EMAIL ID:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <div className="buttons">
        <button className="credentials">
            LOGIN</button>
            <button component={Link} to='/signup' size="medium"> 
            <a href="/signup">CREATE ACCOUNT</a>
         
       </button>
        </div>
        
      </div>
    </form>
  );
}

export default Login_page;
