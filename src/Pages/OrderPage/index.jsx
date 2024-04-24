import React from "react";
import { useLocation, useParams } from "react-router-dom";
import style from "./styles.module.css";

function OrderPage() {
  const location = useLocation();
  console.log(location.state);
  return (
    <div className={style.order}>
      <div className={style.heading}>Order Info</div>
      <div className={style.title}>Order Details</div>
      <table>
        <thead>
          <th>Order Id</th>
          <th>Total Cost</th>
          <th>Date</th>
        </thead>
        <tbody>
          <tr>
            <td>{location.state.orderId}</td>
            <td>{location.state.totalCost}</td>
            <td>{location.state.date}</td>
          </tr>
        </tbody>
      </table>
      <div className={style.title}>Product Details</div>
      <div className={style.items}>
        {location.state.products.map((product, i) => (
          <div className={style.item}>
            <img src={product.thumbnail} alt="" />
            <p>{product.title}</p>
            <p>{product.quantity}</p>
          </div>
        ))}
      </div>
      <div className={style.title}>User Details</div>
      <div className={style.details}>
        <div className={style.innerDetail}>
          <p className={style.tag}>User Id :</p>
          <p className={style.detail}>{location.state.userid}</p>
        </div>
        <div className={style.innerDetail}>
          <p className={style.tag}>Name :</p>
          <p className={style.detail}>{location.state.addressInfo.deliveryDetails.name}</p>
        </div>
        <div className={style.innerDetail}>
          <p className={style.tag}>Address :</p>
          <p className={style.detail}>{location.state.addressInfo.deliveryDetails.address}</p>
        </div>
        <div className={style.innerDetail}>
          <p className={style.tag}>Payment Id :</p>
          <p className={style.detail}>{location.state.paymentId}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
