import React from "react";
import styles from "./bouncing-loader.module.css";

export default function BouncingLoader() {
  return (
    <div className={styles.container}>
      <div className={styles["bouncing-loader"]}>
        <div style={{'--i': 0}}></div>
        <div style={{'--i': 1}}></div>
        <div style={{'--i': 2}}></div>
      </div>
    </div>
  );
}
