import React, { useState } from "react";
import styles from "./styles.module.css";
import {
  FacebookAuthProvider,
  RecaptchaVerifier,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPhoneNumber,
  signInWithPopup,
} from "firebase/auth";
import { app, auth, googleProvider } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { bringToCart } from "../../Redux/features/Cart/CartActions";
import { getFromWatchList } from "../../Redux/features/Watchlist/watchlistaction";
import { toast } from "react-toastify";
import { bringToOrders } from "../../Redux/features/orders/orderActions";

function Signup() {
  const [mobile, setMobile] = useState(false);
  const [otp, setOtp] = useState();
  const [otpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const watchlist = useSelector((state) => state.watchlist);

  function signup(e) {
    e.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        localStorage.setItem("id", res.user.uid);
        toast.success("Logged in as " + localStorage.getItem("id"));
        navigate("/");
      })
      .catch((error) => console.log(error));
  }
  function loginWithGoogle() {
    signInWithPopup(auth, googleProvider)
      .then((resp) => {
        localStorage.setItem("id", resp.user.uid);
        dispatch(bringToCart(localStorage.getItem("id")));
        dispatch(getFromWatchList(localStorage.getItem("id")));
        toast.success("Logged in as " + localStorage.getItem("id"));
        navigate("/");
      })
      .catch((error) => console.log(error));
  }
  function loginWithFacebook() {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((resp) => {
        localStorage.setItem("id", resp.user.uid);
        dispatch(bringToCart(localStorage.getItem("id")));
        dispatch(getFromWatchList(localStorage.getItem("id")));
        toast.success("Logged in as " + localStorage.getItem("id"));
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  }
  function signupwithMobile(e) {
    e.preventDefault();
    const appVerifier = new RecaptchaVerifier(auth, "abc", {
      size: "invisible",
    });
    signInWithPhoneNumber(auth, mobileNo, appVerifier)
      .then((res) => (window.res = res))
      .catch((err) => console.log(err.message));
    setOtpSent(true);
  }
  function confirmOtp(e) {
    e.preventDefault();
    window.res
      .confirm(otp)
      .then((res) => {
        localStorage.setItem("id", res.user.uid);
        dispatch(bringToCart(localStorage.getItem("id")));
        dispatch(getFromWatchList(localStorage.getItem("id")));
        dispatch(bringToOrders(localStorage.getItem('id')));
        toast.success("Logged in as " + localStorage.getItem("id"));
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  }
  return (
    <div className={styles.form}>
      <form
        onSubmit={mobile ? signupwithMobile : signup}
        className={styles.inner}
      >
        <p className={styles.title}>Sign Up</p>
        <p className={styles.message}>Register in Dynamic world of Shopping</p>
        {mobile && (
          <input
            type="text"
            placeholder="Enter your Mobile"
            className="px-[1rem] py-[0.5rem] focus:ring-2 focus:ring-[#F12A43] "
            onChange={(e) => setMobileNo(e.target.value)}
          />
        )}
        {!mobile && (
          <input
            type="text"
            placeholder="Enter your Email"
            className="px-[1rem] py-[0.5rem] focus:ring-2 focus:ring-[#F12A43]"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        {!mobile && (
          <input
            type="password"
            placeholder="Enter your Password"
            className="px-[1rem] py-[0.5rem] focus:ring-2 focus:ring-[#F12A43]"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
        <div id="abc"></div>
        <button className={styles.button} type="submit">
          Sign Up
        </button>
        <p>
          Already a user ?{" "}
          <a href="" onClick={() => navigate("/login")}>
            Log In
          </a>
        </p>
      </form>
      <button className={styles.button} onClick={loginWithGoogle}>
        Sign in with Google
      </button>
      <button className={styles.button} onClick={loginWithFacebook}>
        Sign in with Facebook
      </button>
      <button className={styles.button} onClick={() => setMobile(!mobile)}>
        {!mobile ? "Sign Up with OTP" : "Sign Up with Email"}
      </button>

      {otpSent && (
        <form onSubmit={confirmOtp} className={styles.otp}>
          <input
            type="text"
            placeholder="Enter Otp"
            onChange={(e) => setOtp(e.target.value)}
            className="px-[1rem] py-[0.5rem] focus:ring-2 focus:ring-[#F12A43] "
          />
          <button className={styles.button}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default Signup;
