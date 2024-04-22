import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import ProductCard from "../../Components/DashBoard/ProductCard/Index";
import { useNavigate } from "react-router-dom";

function Watchlist() {
  const navigate = useNavigate();
  if (!localStorage.getItem("id")) {
    return (
      <div className={styles.notlog}>
        <div className={styles.notLogin}>Login to view your WatchList</div>
        <button className={styles.login} onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    );
  }
  const watchlist = useSelector((state) => state.watchlist);
  return (
    <div>
      <div className={styles.title}>My Watchlist</div>
      <div className={styles.main}>
        {watchlist &&
          watchlist.map((product, i) => (
            <div key={i}>
              <ProductCard product={product} />
            </div>
          ))}
        {watchlist.length === 0 && (
          <div className={styles.noItem}>
            <div>No Items in watchlist</div>
            <button className={styles.login} onClick={() => navigate("/")}>
              DashBoard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
