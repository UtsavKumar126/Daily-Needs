import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function Orders() {
  const orders = useSelector((state) => state.orders);
  const navigate=useNavigate();


  if (!localStorage.getItem("id")) {
    return (
      <div className={styles.notLogin}>
        <div className={styles.heading}>My Cart</div>
        <div>Login to view your Orders</div>
        <button className={styles.login} onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    );
  }
  if (localStorage.getItem("id") && orders.length == 0) {
    return (
      <div className={styles.notLogin}>
        <div className={styles.heading}>My Orders</div>
        <div>No Orders to Show</div>
        <button className={styles.login} onClick={() => navigate("/")}>
          DashBoard
        </button>
      </div>
    );
  }
  return (
    <div className={styles.orders}>
      <div className={styles.title}>Order Items</div>
      <div className={styles.orderContainer}>
        {orders.map((order, i) => (
          <div className={styles.order} onClick={()=>navigate(`${order.orderId}`,{state:order})}>
            <p>{order.orderId}</p>
            <p>{order.date}</p>
            <p>{order.totalCost}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
