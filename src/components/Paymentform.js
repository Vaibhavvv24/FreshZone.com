import styles from "./Payment.module.css";
import { useNavigate } from "react-router-dom";

export default function PaymentForm() {
  const navigate = useNavigate();
  return (
    <div className={styles.pay}>
      <h1>Please enter you details to proceed further!</h1>
      <button onClick={() => navigate("/location")}>
        I don't want to fill address Manually
      </button>
      <div>
        <form>
          <div className={styles.formcont}>
            <div className={styles.form}>
              <label htmlFor="n">Full Name</label>
              <input type="text" id="n" placeholder="Enter your Name" />
            </div>
            <div className={styles.form}>
              <label htmlFor="m">Mobile Number</label>

              <input type="text" id="m" placeholder="Enter your phone number" />
            </div>
            <div className={styles.form}>
              <label htmlFor="p">Pincode</label>

              <input type="text" id="p" placeholder="Enter your phone number" />
            </div>
            <div className={styles.form}>
              <label htmlFor="a">Address</label>

              <input type="text" id="a" placeholder="Enter your phone number" />
            </div>
            <div className={styles.form}>
              <label htmlFor="s">State</label>

              <input type="text" id="s" placeholder="Enter your phone number" />
            </div>
            <div className={styles.form}>
              <label htmlFor="c">Country</label>

              <input type="text" id="c" placeholder="Enter your phone number" />
            </div>
            <div className={styles.span}>
              <span>
                Make this my default address
                <input type="checkbox" />
              </span>
            </div>
            <button className={styles.button}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
