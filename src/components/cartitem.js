import { useState } from "react";
import styles from "./cartitem.module.css";
import { LiaMinusCircleSolid, LiaPlusCircleSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { useCart } from "../contexts/cart-context";

export default function CartItem({ item }) {
  const { handleDelete, handleAdd, items, Delete } = useCart();

  return (
    <div className={styles.cart}>
      <div>
        <img src={item.img} alt={item.name} />
      </div>
      <div>
        <div className={styles.quantity}>
          <LiaMinusCircleSolid onClick={() => handleDelete(item.id)} />
          <span>{items[item.id]}</span>

          <LiaPlusCircleSolid onClick={() => handleAdd(item.id)} />
        </div>
        <div className={styles.price}>
          <p>₹{item.price * items[item.id]}</p>
        </div>
        <MdDelete
          cursor="pointer"
          size={"30px"}
          onClick={() => Delete(item.id)}
        />
      </div>
    </div>
  );
}
