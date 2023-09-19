import { useCart } from "../contexts/cart-context";
import styles from "./summaryitem.module.css";

export default function SummaryItem({ item }) {
  const { handleDelete, handleAdd, items, Delete } = useCart();
  return (
    <li className={styles.items}>
      <h1>{item.name.toUpperCase()}</h1>
      <p>Quantity:{items[item.id]}</p>
      <p>Price:{item.price * items[item.id]}</p>
    </li>
  );
}
