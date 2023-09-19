import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import { UseAuth } from "../contexts/authcontext";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [error, setError] = useState("");
  const { Login, googleSignIn, FacebookSignIn } = UseAuth();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await Login(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  }
  async function handleGooglesign(e) {
    e.preventDefault();
    setError("");
    try {
      await googleSignIn();
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  }
  async function handlefacesign(e) {
    e.preventDefault();
    setError("");
    try {
      await FacebookSignIn();
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className={styles.body}>
      <div className={styles.form}>
        <h2>Login to grocery.com!</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <form className={styles.formm} onSubmit={handleSubmit}>
          <div className={styles.formcontrol}>
            <input
              type="text"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formcontrol}>
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPwd(e.target.value)}
            />
          </div>
          <div className={styles.formcontrol}>
            <button>Log in</button>
          </div>
        </form>
        <hr style={{ color: "black" }} />
        <div>
          <GoogleButton
            style={{ width: "100%", marginTop: "20px" }}
            onClick={handleGooglesign}
          />
        </div>
        <div>
          {/* <button
            style={{ width: "100%", marginTop: "20px" }}
            onClick={handlefacesign}
          ></button> */}
        </div>
        {/* <Link to="/phonesignIn">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="submit">
              Sign in with Phone
            </Button>
          </div>
        </Link> */}

        <div>
          <Link to="/forgot">forgotten password?</Link>
        </div>
      </div>
      <div className={styles.sec}>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
