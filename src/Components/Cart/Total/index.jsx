import React, { useContext } from 'react'
import styles from "./styles.module.css"
import { CategoryContext } from '../../../Context/CategoryProvider'
import { useSelector } from 'react-redux';
import { getTotalCost } from '../../../Functions/getTotalCost';

function Total() {
    const{distance}=useContext(CategoryContext);
    const cart=useSelector(state=>state.cart)
  return (
    <div className={styles.main}>
        <div className={styles.title}>Order Summary</div>
        <div className={styles.charges}>
            <p className={styles.highlight}>Item Cost :</p>
            <p className={styles.color}>$ {getTotalCost(cart)}</p>
        </div>
        <div className={styles.charges}>
            <p className={styles.highlight}>Delivery Cost :</p>
            <p className={styles.color}>$ {distance*4}</p>
        </div>
        <hr />
        <div className={styles.charges}>
            <p className={styles.highlight}>Amount :</p>
            <p className={styles.color}>$ {getTotalCost(cart)+distance*4}</p>
        </div>
        <button className={styles.button}>CHECKOUT</button>
    </div>
  )
}

export default Total