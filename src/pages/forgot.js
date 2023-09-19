import { useState } from "react";
import styles from "./login.module.css";
import { Alert, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UseAuth } from "../contexts/authcontext";
export default function Forgot() {
  const { Reset } = UseAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setLoading(true);
      setError("");
      await Reset(email);
      setMessage("check inbox for further instructions");
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }
  return (
    <div className={styles.body}>
      <div className={styles.form}>
        <h2>Password Reset</h2>

        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}

        <form className={styles.formm} onSubmit={handleSubmit}>
          <div className={styles.formcontrol}>
            <input
              type="text"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button disabled={loading} className="w-100" type="submit">
            Reset Password
          </Button>

          <div className={styles.formcontrol}>
            <button onClick={() => navigate("/login")}>Log in</button>
          </div>
        </form>
      </div>
      <div className={styles.sec}>
        Create an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}
