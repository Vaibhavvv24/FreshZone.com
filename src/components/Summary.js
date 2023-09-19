import { useCart } from "../contexts/cart-context";
import { useGrocery } from "../contexts/grocerycontext";
import SummaryItem from "./Summaryitem";
import styles from "./summarylist.module.css";

export default function Summary() {
  const { items, ClearCart, GetAmount } = useCart();

  const { grocery } = useGrocery();
  return (
    <div className={styles.list}>
      <h1>Order Summary</h1>
      <ul>
        {grocery?.map((item) => {
          if (items[item.id] !== 0) {
            return <SummaryItem key={grocery.id} item={item} />;
          }
        })}
      </ul>
    </div>
  );
}
