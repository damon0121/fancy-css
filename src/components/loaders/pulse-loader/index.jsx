import React from "react";
import styles from "./pulse-loader.module.css";

export default function PluseLoader() {
  return (
    <div className={styles.container}>
      <div className={styles['ripple-loader']}></div>
    </div>
  );
}
