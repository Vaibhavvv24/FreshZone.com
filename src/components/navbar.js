import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./logo";
import styles from "./navbar.module.css";
import { BsPersonFill } from "react-icons/bs";
// import { useAuth0 } from "@auth0/auth0-react";
import { AiOutlineMail } from "react-icons/ai";
import { UseAuth } from "../contexts/authcontext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logOut } = UseAuth();
  // const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  async function Logout() {
    await logOut();
    navigate("/signup");
  }
  return (
    <nav className={styles.nav}>
      <ul>
        <Logo />

        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/about">About us</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        {user ? (
          <li>
            <BsPersonFill onClick={() => navigate("/profile")} />
            <span>{user.name}</span>
            <button onClick={Logout}>Logout</button>
          </li>
        ) : (
          <li>
            <NavLink to="/login">
              <button>Login</button>
            </NavLink>
          </li>
        )}

        {/* {isAuthenticated ? (
          <li>
            <BsPersonFill />
            <span>{user.name}</span>
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <NavLink to="/login">
              <button onClick={loginWithRedirect}>Login</button>
            </NavLink>
          </li>
        )} */}
        <li>
          <AiOutlineMail
            style={{ marginLeft: "10px", fontSize: "34px", cursor: "pointer" }}
            onClick={() => navigate("/contact")}
          />
        </li>
      </ul>
    </nav>
  );
}
