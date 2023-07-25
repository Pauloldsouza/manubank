import Header from "./components/Header";
import Info from "./components/Information";

export default function App() {
  return (
    <div
      className="container"
      style={{ backgroundColor: "#2c2c2d", height: "100vh" }}
    >
      <Header />
      <Info />
    </div>
  );
}
