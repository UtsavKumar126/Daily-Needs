import React, { useState } from "react";
import styles from "./styles.module.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../Firebase";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { bringToCart } from "../../Redux/features/Cart/CartActions";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
  function signin(e) {
    e.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userData) => {
        localStorage.setItem("id",userData.user.uid);
        dispatch(bringToCart(localStorage.getItem('id')));
        navigate("/")
      })
      .catch((err) => console.log(err));
  }
  return (
    <form className={styles.form} onSubmit={signin}>
      <p className={styles.title}>Log In</p>
      <input
        type="text"
        placeholder="Email/Mobile No. "
        className="px-[1rem] py-[0.5rem] focus:ring-2 focus:ring-[#F12A43]"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your password"
        className="px-[1rem] py-[0.5rem] focus:ring-2 focus:ring-[#F12A43]"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button} type="submit">
        Log In
      </button>
      <a href="" onClick={()=>navigate("/signup")}>New to us SignUp</a>
      <p className={styles.message}>Forget Password ?</p>
    </form>
  );
}

export default Login;
