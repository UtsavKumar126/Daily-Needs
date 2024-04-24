import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

function Orders() {
  const orders = useSelector((state) => state.orders);
  const navigate=useNavigate();
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
