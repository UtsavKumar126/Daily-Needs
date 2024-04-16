import React, { useState } from "react";
import style from "./styles.module.css";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import {useDispatch, useSelector} from "react-redux"
import { addToCart } from "../../../Redux/features/Cart/CartSlice";

function ProductCard({ product }) {
  const [added, setAdded] = useState(false);
  const state=useSelector(state=>state.cart)
  const dispatch=useDispatch();

  return (
    <div className={style.card}>
      <img src={product.thumbnail} className={style.image} alt="" />
      <p className={style.title}>{product.title}</p>
      <p style={{ marginLeft: "0.5rem" }}>{product.description}</p>
      <p style={{ marginLeft: "0.5rem" }}>
        <span>${product.price}</span>
      </p>
      <div className={style.buttonBox}>
        <button className={style.button} onClick={()=>{dispatch(addToCart(product))
        console.log(state);}}>Add to Cart</button>
      </div>
      <div className={style.icon} onClick={()=>setAdded(true)}>
        {
          !added?<StarBorderRoundedIcon />:<StarRoundedIcon/>
        }
      </div>
    </div>
  );
}

export default ProductCard;
