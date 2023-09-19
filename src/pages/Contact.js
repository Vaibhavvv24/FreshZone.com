import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import styles from "./Contact.module.css";
import { UseAuth } from "../contexts/authcontext";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Contact() {
  // const { isAuthenticated, user } = useAuth0();
  const { user } = UseAuth();
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    alert("Email sent we will contact you later");
    navigate("/");
  }
  function handleSave(e) {
    e.preventDefault();
    alert("Your details have been saved to the dashboard");
  }
  return (
    <div className={styles.contact}>
      <div className={styles.heading}>
        <h1>Live Location of Our Store in Bengaluru</h1>
        <p>You can contact us by sending us an email!</p>
      </div>
      <iframe
        title="Dmart"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.005158591859!2d77.67153737334668!3d12.84294291768947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c8cf0d4af6d%3A0xa0dc27017f74872b!2sDMart%2C%20Electronic%20City!5e0!3m2!1sen!2sin!4v1694738704862!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
      <div className={styles.formcont}>
        <form onSubmit={handleSubmit} className={styles.contact}>
          <div className={styles.formele}>
            <label>Email</label>
            <input type="text" value={user ? user.email : ""} />
          </div>
          <div className={styles.formele}>
            <label>name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formele}>
            <label>Phone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.formele}>
            <label htmlFor="date">Date of Birth</label>
            <DatePicker
              id="date"
              onChange={(date) => setDate(date)}
              selected={date}
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <div className={styles.formele}>
            <button onClick={handleSave}>Save information</button>
          </div>
          <div className={styles.formele}>
            <button>Send email</button>
          </div>
        </form>
      </div>
    </div>
  );
}
