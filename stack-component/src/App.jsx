import { useState } from "react";
import Stack from "./components/Stack";
import styles from "./App.module.css";

function App() {
  const [direction, setDirection] = useState("row");
  const [spacing, setSpacing] = useState(2);
  const [alignItems, setAlignItems] = useState("center");
  const [justifyContent, setJustifyContent] = useState("flex-start");

  const boxStyle = {
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: "4px",
  };

  const codeSample = `
<Stack
  direction="${direction}"
  spacing={${spacing}}
  alignItems="${alignItems}"
  justifyContent="${justifyContent}"
>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</Stack>
  `.trim();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Stack Interactive Demo</h1>
      <p className={styles.instructions}>
        Use the controls below to experiment with the Stack component's
        properties.
      </p>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <label htmlFor="direction">Direction:</label>
          <select
            id="direction"
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="row">Row</option>
            <option value="column">Column</option>
            <option value="row-reverse">Row Reverse</option>
            <option value="column-reverse">Column Reverse</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label htmlFor="spacing">Spacing:</label>
          <select
            id="spacing"
            value={spacing}
            onChange={(e) => setSpacing(Number(e.target.value))}
          >
            <option value={0}>0 (0px)</option>
            <option value={1}>1 (8px)</option>
            <option value={2}>2 (16px)</option>
            <option value={3}>3 (24px)</option>
            <option value={4}>4 (32px)</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label htmlFor="alignItems">Align Items:</label>
          <select
            id="alignItems"
            value={alignItems}
            onChange={(e) => setAlignItems(e.target.value)}
          >
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="baseline">Baseline</option>
            <option value="stretch">Stretch</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <label htmlFor="justifyContent">Justify Content:</label>
          <select
            id="justifyContent"
            value={justifyContent}
            onChange={(e) => setJustifyContent(e.target.value)}
          >
            <option value="flex-start">Flex Start</option>
            <option value="flex-end">Flex End</option>
            <option value="center">Center</option>
            <option value="space-between">Space Between</option>
            <option value="space-around">Space Around</option>
            <option value="space-evenly">Space Evenly</option>
          </select>
        </div>
      </div>

      <div className={styles.demoArea}>
        <Stack
          direction={direction}
          spacing={spacing}
          alignItems={alignItems}
          justifyContent={justifyContent}
          className={styles.stack}
        >
          <div style={{ ...boxStyle, backgroundColor: "#1976d2" }}>1</div>
          <div style={{ ...boxStyle, backgroundColor: "#388e3c" }}>2</div>
          <div style={{ ...boxStyle, backgroundColor: "#d32f2f" }}>3</div>
        </Stack>
      </div>

      <div className={styles.codeArea}>
        <h2 className={styles.codeTitle}>Code Sample</h2>
        <pre className={styles.codeBlock}>
          <code>{codeSample}</code>
        </pre>
      </div>
    </div>
  );
}

export default App;
