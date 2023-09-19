import { Navigate } from "react-router-dom";
import { UseAuth } from "../contexts/authcontext";

export default function Protected({ children }) {
  const { user } = UseAuth();
  //   let user = false;

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
