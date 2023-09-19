import Search from "../components/Search";
import ProductList from "../components/ProductList";
import styles from "./products.module.css";
import Navbar from "../components/navbar";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cart-context";

export default function Products() {
  const navigate = useNavigate();
  const { count } = useCart();
  const c = count();
  return (
    <>
      <nav className={styles.nav}>
        <Navbar />
        <Search />
        {/* <Link to="/cart"> */}
        <HiOutlineShoppingCart
          size="35px"
          cursor={"pointer"}
          onClick={() => navigate("/cart")}
        />
        <p style={{ verticalAlign: "top", borderRadius: "50%" }}>
          {c > 0 ? c : ""}
        </p>
        {/* </Link> */}
      </nav>

      <div>
        <ProductList />
      </div>
    </>
  );
}
