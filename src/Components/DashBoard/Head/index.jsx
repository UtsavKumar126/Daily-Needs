import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../../../Firebase";
import { pushToCart } from "../../../Redux/features/Cart/CartSlice";
import { pushToOrders } from "../../../Redux/features/orders/ordersSlice";
import {pushToWatchList} from '../../../Redux/features/Watchlist/WatchlistSlice'

function Head() {
  const watchlist = useSelector((state) => state.watchlist);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logout() {
    if (window.confirm("Do you want to logout")) {
      const auth = getAuth(app);
      signOut(auth).then((res) => {
        dispatch(pushToCart(localStorage.getItem("id")));
        dispatch(pushToWatchList(localStorage.getItem("id")));
        dispatch(pushToOrders(localStorage.getItem("id")));
        localStorage.removeItem("id");
        navigate("/");
        toast.success("Logged out Successfully");
      });
    }
  }

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
      <Link to={"/watchlist"}>Watchlist ({watchlist.length})</Link>
      <Link to={"/orders"}>Orders</Link>
      {!localStorage.getItem("id") && <Link to={"/login"}>Login</Link>}
      {localStorage.getItem("id") && (
        <Link onClick={() => logout()}>Logout</Link>
      )}
    </div>
  );
}

export default Head;
