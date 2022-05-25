import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import SignIn from "./pages/Auth/SignIn";

function App() {
  return (
    <div className="app">
      <Navbar />
      <SignIn />
    </div>
  );
}

export default App;
