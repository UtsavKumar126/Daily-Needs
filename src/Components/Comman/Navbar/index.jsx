import React from "react";
import Styles from "./styles.module.css";
import logo from "../../../assets/logo.png";
import SearchBar from "../SearchBar";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import CartSize from "../CartSize";
import { useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';

function NavBar() {
  const navigate=useNavigate();
  return (
    <nav className={Styles.navbar}>
      <img src={logo} className={Styles.image} alt="" />
      <SearchBar />
      <div className={Styles.contact}>
        <ContactPhoneRoundedIcon fontSize="large" sx={{ color: "white" }} />
        <div>
          <div>Call Center</div>
          <div>+91-7717755757</div>
        </div>
      </div>
      <Tooltip title='Go to Cart'>
      <div className={Styles.cart} onClick={()=>navigate('/cart')}>
        <div>Cart</div>
        <ShoppingCartRoundedIcon fontSize="large" sx={{ color: "white" }} />
      </div>
      </Tooltip>
      <CartSize/>
    </nav>
  );
}

export default NavBar;
