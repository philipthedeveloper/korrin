import "./App.css";
import Navbar from "./components/Navbar";
import Router from "./router/router";

function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
