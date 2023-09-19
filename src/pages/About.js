import Navbar from "../components/navbar";
import styles from "./about.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { IconContext } from "react-icons";
export default function About() {
  return (
    <>
      <Navbar />
      <section className={styles.about}>
        <p>
          "On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble that are bound to ensue; and equal blame belongs to those
          who fail in their duty through weakness of will, which is the same as
          saying through shrinking from toil and pain. These cases are perfectly
          simple and easy to distinguish. In a free hour, when our power of
          choice is untrammelled and when nothing prevents our being able to do
          what we like best, every pleasure is to be welcomed and every pain
          avoided. But in certain circumstances and owing to the claims of duty
          or the obligations of business it will frequently occur that pleasures
          have to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains."
        </p>
      </section>
      <footer>
        <IconContext.Provider value={{ size: "30px", color: "blue" }}>
          <a
            href="https://www.instagram.com/vebsterrrr24/"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/BCCIdomestic?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/vebsterrrr24/"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a href="https://web.whatsapp.com/" rel="noreferrer" target="_blank">
            <FaWhatsapp />
          </a>
        </IconContext.Provider>
      </footer>
    </>
  );
}
