import { useGrocery } from "../contexts/grocerycontext";
import CartItem from "./cartitem";
import { useCart } from "../contexts/cart-context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import styles from "./cartlist.module.css";

export default function CartList() {
  const { items, ClearCart, GetAmount } = useCart();

  function Clear() {
    ClearCart();
  }

  const { grocery } = useGrocery();
  const navigate = useNavigate();
  let totalprice = GetAmount();
  let deliverycharges = (totalprice * 10) / 100;
  const Total_Price = deliverycharges + totalprice;
  if (totalprice === 0)
    return (
      <>
        <h1 className={styles.heading}>Your Cart is empty!</h1>
        <div className={styles.empty}>
          <img src="/Images/Veggie/cartemp.png" />
        </div>
        <div className={styles.empty}>
          <BiArrowBack
            cursor={"pointer"}
            onClick={() => navigate("/products")}
          ></BiArrowBack>

          <span> Go back to to products page</span>
        </div>
      </>
    );

  return (
    <>
      <ul>
        {grocery?.map((item) => {
          if (items[item.id] !== 0) {
            return <CartItem key={item.id} item={item} />;
          }
        })}
      </ul>

      <p>Subtotal: {totalprice}</p>
      <p>Total Amount(including taxes and delivery charges): {Total_Price}</p>
      <button onClick={Clear}>Clear Cart</button>
      <button onClick={() => navigate("/products")}>Continue Shopping</button>
      <button onClick={() => navigate("/checkout")}>Proceed to checkout</button>
    </>
  );
}
