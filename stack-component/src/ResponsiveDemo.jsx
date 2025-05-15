import { useState } from "react";
import Stack from "./components/Stack";
import Nav from "./components/Nav";
import styles from "./ResponsiveDemo.module.css";
export default function ResponsiveDemo() {
  const boxStyle = {
    /* ... */
  };
  return (
    <div className={styles.container}>
      <Nav />
      <h1>Stack Responsive Demo</h1>
      <div className={styles.controls}>
        <div className={styles.propSection}>
          <h2>Direction</h2>
          <div className={styles.controlGroup}>
            <select className={styles.breakpointSelect}>
              <option>XS</option>
            </select>
            <select className={styles.valueSelect}>
              <option>Column</option>
            </select>
            <button className={styles.removeButton} disabled>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className={styles.demoArea}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={1}
          className={styles.stack}
        >
          <div style={{ ...boxStyle, backgroundColor: "#1976d2" }}>1</div>
          <div style={{ ...boxStyle, backgroundColor: "#388e3c" }}>2</div>
          <div style={{ ...boxStyle, backgroundColor: "#d32f2f" }}>3</div>
        </Stack>
      </div>
    </div>
  );
}
