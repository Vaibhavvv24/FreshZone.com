import Navbar from "../components/navbar";
import { MdHeadset } from "react-icons/md";
import styles from "./services.module.css";

export default function Services() {
  return (
    <>
      <Navbar />

      <section className={styles.services}>
        <h1 style={{ fontSize: "40px", textAlign: "center" }}>Our Services</h1>
        <div className={styles.boxes}>
          <div>
            <img src="/bag.jpeg" alt="grocery bag" />
            <h2>Takeaway</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              rerum aliquam laudantium exercitationem optio voluptate similique,
              magni nam blanditiis ipsa distinctio beatae nobis veritatis sunt
              officia fuga dolorem molestias autem totam eius rem quia esse!
              Debitis!
            </p>
          </div>
          <div class="box">
            <img src="/homedelivery.jpg" alt="pizza" />
            <h2 class="secondary">Home delivery</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              rerum aliquam laudantium exercitationem optio voluptate similique,
              magni nam blanditiis ipsa distinctio beatae nobis veritatis sunt
              officia fuga dolorem molestias autem totam eius rem quia esse!
              Debitis!
            </p>
          </div>
          <div class="box">
            <MdHeadset size="200px" />
            <h2 class="secondary">24/7 support</h2>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              rerum aliquam laudantium exercitationem optio voluptate similique,
              magni nam blanditiis ipsa distinctio beatae nobis veritatis sunt
              officia fuga dolorem molestias autem totam eius rem quia esse!
              Debitis!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
