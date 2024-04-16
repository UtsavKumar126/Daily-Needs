import React from "react";
import styles from "./styles.module.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';

function FooterTopCard({ data, number }) {
  return (
    <div className={number!=3?styles.main:styles.main2}>
      <img src={data.image} alt="" className={styles.image} />
      <div>
        <p className={styles.title}>{data.data1}</p>
        <p className={styles.desc}>{data.data2}</p>
        {number != 3 && (
          <p className={styles.checked}>
            <CheckCircleRoundedIcon color="success" />
            {data.data3}
          </p>
        )}
        {number != 3 && (
          <p className={styles.checked}>
            <CheckCircleRoundedIcon color="success" />
            {data.data4}
          </p>
        )}
        {number != 3 && (
          <p className={styles.checked}>
            <CheckCircleRoundedIcon color="success" />
            {data.data5}
          </p>
        )}
        {number === 3 && <p><AdbIcon sx={{color:"grey"}} fontSize="large"/> Android</p>}
        {number === 3 && <p><AppleIcon sx={{color:"grey"}}fontSize="large"/>iOs</p>}
      </div>
    </div>
  );
}

export default FooterTopCard;
