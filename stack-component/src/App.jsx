import Stack from "./components/Stack";

function App() {
  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    background: "#f0f0f0",
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>
        Stack Component Examples
      </h1>

      {/* Example 1: Responsive Direction Switch */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Example 1: Column to Row at lg
        </h2>
        <Stack
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          spacing={{ xs: 1, sm: 1, md: 2, lg: 3 }}
          alignItems="center"
          justifyContent="flex-start"
        >
          <button style={buttonStyle}>Button 1</button>
          <button style={buttonStyle}>Button 2</button>
        </Stack>
      </div>

      {/* Example 2: Spacing Progression */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Example 2: Increasing Spacing
        </h2>
        <Stack
          direction="column"
          spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          alignItems="stretch"
          justifyContent="flex-start"
        >
          <button style={buttonStyle}>Button 1</button>
          <button style={buttonStyle}>Button 2</button>
        </Stack>
      </div>

      {/* Example 3: Alignment Variations */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Example 3: Varying Alignment
        </h2>
        <Stack
          direction="row"
          spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
          alignItems={{
            xs: "stretch",
            sm: "center",
            md: "flex-start",
            lg: "baseline",
          }}
          justifyContent="center"
        >
          <button style={buttonStyle}>Button 1</button>
          <button style={buttonStyle}>Button 2</button>
        </Stack>
      </div>

      {/* Example 4: Justification Variations */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Example 4: Varying Justification
        </h2>
        <Stack
          direction="row"
          spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
          alignItems="center"
          justifyContent={{
            xs: "flex-start",
            sm: "space-between",
            md: "center",
            lg: "space-evenly",
          }}
        >
          <button style={buttonStyle}>Button 1</button>
          <button style={buttonStyle}>Button 2</button>
        </Stack>
      </div>

      {/* Example 5: Mixed Configuration */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Example 5: Mixed Responsive Layout
        </h2>
        <Stack
          direction={{ xs: "column", sm: "row", md: "column", lg: "row" }}
          spacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
          alignItems={{
            xs: "flex-start",
            sm: "center",
            md: "stretch",
            lg: "flex-end",
          }}
          justifyContent={{
            xs: "flex-start",
            sm: "space-around",
            md: "center",
            lg: "space-between",
          }}
        >
          <button style={buttonStyle}>Button 1</button>
          <button style={buttonStyle}>Button 2</button>
        </Stack>
      </div>
    </div>
  );
}

export default App;
