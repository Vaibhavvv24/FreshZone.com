import { createContext, useContext, useState } from "react";
import { useGrocery } from "./grocerycontext";

const cartContext = createContext();
function getDefaultCart() {
  let cart = {};
  for (let i = 1; i < 41; i++) {
    cart[i] = 0;
  }
  return cart;
}

function CartProvider({ children }) {
  const { grocery } = useGrocery();
  const [items, setItems] = useState(getDefaultCart());
  function handleAdd(id) {
    setItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }
  function handleDelete(id) {
    setItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  }
  function Delete(id) {
    setItems((prev) => ({ ...prev, [id]: 0 }));
  }
  function GetAmount() {
    let amt = 0;
    for (const item in items) {
      if (items[item] > 0) {
        let iteminfo = grocery.find((it) => it.id === Number(item));
        amt += items[item] * iteminfo.price;
      }
    }
    return amt;
  }
  function count() {
    let c = 0;
    for (const item in items) {
      if (items[item] > 0) {
        c += items[item];
      }
    }
    return c;
  }
  function ClearCart() {
    setItems(getDefaultCart());
  }

  return (
    <cartContext.Provider
      value={{
        items,
        handleAdd,
        handleDelete,
        ClearCart,
        GetAmount,
        Delete,
        count,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
function useCart() {
  const context = useContext(cartContext);
  return context;
}
export { CartProvider, useCart };
