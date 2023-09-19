import styles from "./login.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UseAuth } from "../contexts/authcontext";
function Phonesignup() {
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const { setUpRecapcha } = UseAuth();
  async function getOtp(e) {
    e.preventDefault();
    console.log(number);
    if (number === "" || number === undefined)
      return setError("Please enter a valid phone number!");
    try {
      setError("");
      const response = await setUpRecapcha(number);
      console.log(response);
    } catch (err) {
      setError(err.message);
    }
  }
  return (
    <div className={styles.body}>
      <div className={styles.form} style={{ height: "350px" }}>
        <h2>Enter Otp to login to grocery.com!</h2>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}

        <form className={styles.formm} onSubmit={getOtp}>
          <div className={styles.formcontrol}>
            <PhoneInput
              defaultCountry="IN"
              value={number}
              onChange={setNumber(number)}
              placeholder="Enter Phone Number"
            />
          </div>
          <div id="recaptcha-container"></div>
          <div className={styles.right}>
            <Button variant="secondary" onClick={() => navigate("/login")}>
              Cancel
            </Button>
            &nbsp;
            <Button type="submit" variant="primary">
              Send Otp
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Phonesignup;
