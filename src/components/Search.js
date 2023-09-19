import { useGrocery } from "../contexts/grocerycontext";

export default function Search() {
  const { query, setQuery } = useGrocery();
  return (
    <input
      type="text"
      placeholder="Search for products"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
