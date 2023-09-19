import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="/logoweb.jpg" alt="Grocery logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
