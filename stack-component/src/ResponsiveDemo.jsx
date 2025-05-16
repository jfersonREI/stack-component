import React from "react";
import Nav from "./components/Nav";
import Stack from "./components/Stack"; // Path to Stack.js from the repo
import styles from "./ResponsiveDemo.module.css"; // CSS Modules for scoped styling

const ResponsiveDemo = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <h1 className={styles.title}>Responsive Stack Demo</h1>
      <p className={styles.description}>
        Resize the window to see the layout adapt based on breakpoints.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Basic Responsive Stack</h2>
        <p className={styles.description}>
          Switches from vertical (xs) to horizontal (sm) with responsive
          spacing.
        </p>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2 }}
        >
          <div className={styles.item} style={{ backgroundColor: "lightblue" }}>
            Item 1
          </div>
          <div
            className={styles.item}
            style={{ backgroundColor: "lightgreen" }}
          >
            Item 2
          </div>
          <div
            className={styles.item}
            style={{ backgroundColor: "lightcoral" }}
          >
            Item 3
          </div>
        </Stack>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>No changes at breakpoints</h2>
        <p className={styles.description}>Stays the same.</p>
        <Stack direction="row" spacing={1}>
          <div className={styles.item} style={{ backgroundColor: "lightblue" }}>
            Item 1
          </div>
          <div
            className={styles.item}
            style={{ backgroundColor: "lightgreen" }}
          >
            Item 2
          </div>
          <div
            className={styles.item}
            style={{ backgroundColor: "lightcoral" }}
          >
            Item 3
          </div>
        </Stack>
      </section>
    </div>
  );
};

export default ResponsiveDemo;
