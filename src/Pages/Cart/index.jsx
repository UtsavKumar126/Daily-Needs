import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import CartItem from "../../Components/Cart/CartItem";
import Distance from "../../Components/Cart/Distance";
import Total from "../../Components/Cart/Total";

function Cart() {
  const products = useSelector((state) => state.cart);
  return (
    <div className={styles.main}>
      <div className={styles.cart}>
        <div className={styles.heading}>
          <div>My Cart</div>
          <div>{products.length} Items</div>
        </div>
        <table>
          <thead>
            <th>Product Details</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Remove</th>
          </thead>
          <tbody>
            {products.map((product, i) => (
             <CartItem product={product} key={i}/>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.order}>
        <Distance/>
        <Total/>
      </div>
    </div>
  );
}

export default Cart;
