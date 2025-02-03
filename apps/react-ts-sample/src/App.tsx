import { Button } from "@monorepo/ui";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Button startIcon={"🚀"}>Click me</Button>
      <Button endIcon={"🚀"}>Click me</Button>
      <Button>Click me</Button>
      <Button variant="outlined">🚀</Button>
    </div>
  );
}

export default App;
