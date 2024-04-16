import React from 'react'
import styles from "./styles.module.css"
import {useSelector} from "react-redux"

function CartSize() {
  const cartSize=useSelector((state)=>state.cart)
  return (
    <div className={styles.cart}>{cartSize.length}</div>
  )
}

export default CartSize