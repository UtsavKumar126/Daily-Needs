import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import CartItem from "../../Components/Cart/CartItem";
import Distance from "../../Components/Cart/Distance";
import Total from "../../Components/Cart/Total";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getTotalCost } from "../../Functions/getTotalCost";
import { Try } from "@mui/icons-material";
import { addToOrders } from "../../Redux/features/orders/ordersSlice";
import { resetCart } from "../../Redux/features/Cart/CartSlice";

function Cart() {
  const products = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    pincode: "",
    phoneNumber: "",
  });

  const buyNow = async (totalCost) => {
    if (
      deliveryDetails.name === "" ||
      deliveryDetails.address === "" ||
      deliveryDetails.phoneNumber === "" ||
      deliveryDetails.pincode === ""
    ) {
      return toast.error("All fields are required");
    }

    const addressInfo = {
      deliveryDetails,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };
    var options = {
      key: "rzp_test_VcAXr8AYEsbGfK",
      key_secret: "1gdWm8X7TeBefUbnGh3TzZAo",
      amount: parseInt(totalCost*100),
      currency: "INR",
      order_receipt: "order_rcptid_" + deliveryDetails.name,
      name: "E-Bharat",
      description: "for testing purpose",
      handler: function (response) {
        console.log(response);
        toast.success("Payment Successful");

        const paymentId = response.razorpay_payment_id;
        const orderInfo = {
          products,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          userid: localStorage.getItem("id"),
          paymentId,
        };

        dispatch(addToOrders(orderInfo))
        dispatch(resetCart()),
        navigate('/')
      },

      theme: {
        color: "#3399cc",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
    console.log(pay);
  };

  if (!localStorage.getItem("id")) {
    return (
      <div className={styles.notLogin}>
        <div className={styles.heading}>My Cart</div>
        <div>Login to view your Cart</div>
        <button className={styles.login} onClick={() => navigate("/login")}>
          Login
        </button>
      </div>
    );
  }
  if (localStorage.getItem("id") && products.length == 0) {
    return (
      <div className={styles.notLogin}>
        <div className={styles.heading}>My Cart</div>
        <div>No Items to show in cart</div>
        <button className={styles.login} onClick={() => navigate("/")}>
          DashBoard
        </button>
      </div>
    );
  }
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
              <CartItem product={product} key={i} />
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.order}>
        <Distance />
        <Total deliveryDetails={deliveryDetails} setDeliveryDetails={setDeliveryDetails} buyNow={buyNow}/>
      </div>
    </div>
  );
}

export default Cart;
