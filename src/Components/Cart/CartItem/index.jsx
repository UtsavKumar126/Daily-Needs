import React from "react";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../../Redux/features/Cart/CartSlice";

function CartItem({ product }) {
    const dispatch=useDispatch();

  return (
    <tr>
      <td>
        <img src={product.thumbnail} alt="" />
        <div className={styles.details}>
          <p className={styles.title}>{product.title}</p>
          <p>{product.brand}</p>
          <p>{product.category}</p>
        </div>
      </td>
      <td className="center">
        <div className={styles.quant}>
          <button disabled={product.quantity<1?true:false} onClick={()=>(dispatch(decreaseQuantity(product.id)))}>-</button>
          <div>{product.quantity}</div>
          <button onClick={()=>(dispatch(increaseQuantity(product.id)))}>+</button>
        </div>
      </td>
      <td className="center">₹{product.price}</td>
      <td className="center">₹{product.quantity * product.price}</td>
      <td className="center">
        <button onClick={()=>
            {dispatch(removeFromCart(product.id))
            console.log("clicked",product.id);} 
            }>Remove</button>
      </td>
    </tr>
  );
}

export default CartItem;
