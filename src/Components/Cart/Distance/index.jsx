import React, { useContext } from "react";
import styles from "./styles.module.css";
import { useState } from "react";
import { calculateDistance } from "../../../Functions/calculateDistance";
import { CategoryContext } from "../../../Context/CategoryProvider";

function Distance() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const { distance, setDistance } = useContext(CategoryContext);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setDistance(calculateDistance(
            23.8209972,
            86.4697282,
            position.coords.latitude,
            position.coords.longitude
          ).toFixed(2));
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className={styles.main}>
      <button className={styles.button} onClick={() => getLocation()}>
        Find My Location
      </button>
      <div className={styles.cords}>
        <div className={styles.highlight}>Latitude :</div>
        <div className={styles.color}>{latitude}</div>
      </div>
      <div className={styles.cords}>
        <div className={styles.highlight}>Longitude :</div>
        <div className={styles.color}>{longitude}</div>
      </div>
      <div className={styles.distance}>
        <div className={styles.heading}>Delivery Distance</div>
        {longitude && <div className={styles.color}>{distance} KM</div>}
      </div>
    </div>
  );
}

export default Distance;
