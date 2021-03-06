import react, { useState } from "react";
import "../../src/index.css";
import { useNavigate, Link } from "react-router-dom";

function Signup_page() {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    // login(details);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Create Account</h2>
        {/* {error != "" ? <div className="error">{error}</div> : ""} */}

        <div className="form-group">
          <label htmlFor="name">FULL NAME:</label>
          <input
            type="text"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
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
          <button className="credentials"> Sign up</button>
          <button component={Link} to="/login" size="medium">
            <a href="/login">Already have an account?</a>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Signup_page;
