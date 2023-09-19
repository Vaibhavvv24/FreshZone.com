import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const GroceyContext = createContext();
const initial = {
  isloading: false,
  error: "",
  grocery: [],
};
function reduce(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isloading: true };
    case "grocery/loaded":
      return { ...state, isloading: false, grocery: action.payload };
    default:
      throw new Error("Uknown action type");
  }
}
function Groceryprovider({ children }) {
  const [{ grocery, isloading, error }, dispatch] = useReducer(reduce, initial);
  const [query, setQuery] = useState("");
  const SearchedGrocery =
    query.length > 0
      ? grocery.filter((groceryitem) =>
          `${groceryitem.name}`.toLowerCase().includes(query.toLowerCase())
        )
      : grocery;
  useEffect(function () {
    async function getGrocery() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch("http://localhost:8000/Groceries");
        const data = await res.json();
        dispatch({ type: "grocery/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the city...",
        });
      }
    }
    getGrocery();
  }, []);
  return (
    <GroceyContext.Provider
      value={{ grocery: SearchedGrocery, isloading, query, setQuery }}
    >
      {children}
    </GroceyContext.Provider>
  );
}

function useGrocery() {
  const context = useContext(GroceyContext);
  return context;
}
export { Groceryprovider, useGrocery };
