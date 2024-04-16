import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../../../Firebase";
import { useDispatch } from "react-redux";
import { pushToCart } from "../../../Redux/features/Cart/CartSlice";

function Head() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={styles.head}>
      {localStorage.getItem("id") && (
        <div className={styles.div}>
          Hello , {localStorage.getItem("id")} , Welcome to new world of
          Shoppinng ..
        </div>
      )}
      <select name="Currency" id="">
        <optgroup label="Currency">
          <option value="">$</option>
          <option value="">₹</option>
          <option value="">LKR</option>
        </optgroup>
      </select>
      {!localStorage.getItem("id") && (
        <a href="" onClick={() => navigate("/login")}>
          Login
        </a>
      )}
      {localStorage.getItem("id") && (
        <p
          onClick={() => {
            const auth = getAuth(app);
            signOut(auth).then((res) => {
              dispatch(pushToCart(localStorage.getItem("id")));
              localStorage.setItem("id", "");
              navigate("/");
            });
          }}
        >
          Logout
        </p>
      )}
    </div>
  );
}

export default Head;
