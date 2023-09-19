import Navbar from "../components/navbar";
import styles from "./homepage.module.css";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main className={styles.homepage}>
        <section>
          <h1>Welcome to FreshZone.com</h1>
          <h2>We are one of the best grocery stores in Banglore</h2>
          <p>
            Please first login to our website and then go to the products
            section to buy groceries/dairy/fruits/vegetables. We also offer home
            delivery and 20% discount for new users.
          </p>
        </section>
      </main>
    </>
  );
}
