import React from "react";
import styles from "./bouncing-loader.module.css";

export default function BouncingLoader() {
  return (
    <div className={styles.container}>
      <div className={styles["bouncing-loader"]}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
