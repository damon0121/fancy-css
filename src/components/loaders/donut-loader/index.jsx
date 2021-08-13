import React from "react";
import styles from "./donut-loader.module.css";

export default function DonutLoader() {
  return (
    <div className={styles.container}>
      <div className={styles.donut}></div>
    </div>
  );
}
