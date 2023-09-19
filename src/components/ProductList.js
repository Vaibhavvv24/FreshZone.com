import { useState } from "react";
import { useGrocery } from "../contexts/grocerycontext";
import Loader from "./Loader";
import Product from "./Product";
import styles from "./productlist.module.css";
export default function ProductList() {
  const { grocery, isloading } = useGrocery();
  const [items, setItems] = useState(grocery);
  const menubuts = [...new Set(grocery.map((val) => val.category))];
  const filterItems = (cat) => {
    const newItems = grocery.filter((newval) => newval.category === cat);
    setItems(newItems);
  };
  if (isloading) return <Loader />;
  return (
    <>
      <div className={styles.cat}>
        {menubuts.map((val) => (
          <button className={styles.catbut} onClick={() => filterItems(val)}>
            {val}
            <img src={`./Images/Veggie/${val}.jpeg`} alt={val} />
          </button>
        ))}
        <button className={styles.catbut} onClick={() => setItems(grocery)}>
          All
        </button>
      </div>
      <ul className={styles.productlist}>
        {items?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}
