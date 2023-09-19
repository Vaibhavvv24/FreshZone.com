import { useSearchParams } from "react-router-dom";

export default function useUrlPos() {
  const [searchParams] = useSearchParams();
  let latitude = searchParams.get("lat");
  let longitude = searchParams.get("lng");
  return [latitude, longitude];
}
