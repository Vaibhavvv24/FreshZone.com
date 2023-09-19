import { useCart } from "../contexts/cart-context";
import styles from "./product.module.css";
import { ToastContainer, toast } from "react-toastify";
export default function Product({ product }) {
  const { handleAdd, items } = useCart();
  function toastfn() {
    return (
      toast.success(`${product.name} added to Cart`),
      {
        theme: "colored",
        closeOnClick: true,
        autoClose: 2000,
      }
    );
  }
  function handle() {
    handleAdd(product.id);
    if (items[product.id] < 1) toastfn();
  }
  return (
    <li className={styles.product}>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <h2>Price: ₹{product.price}</h2>

      <button
        onClick={() => {
          handle();
        }}
      >
        Add To Cart{items[product.id] === 0 ? "" : `(${items[product.id]})`}
      </button>
      <ToastContainer closeOnClick theme="colored" autoClose={2000} />
    </li>
  );
}
