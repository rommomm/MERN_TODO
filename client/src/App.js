import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from "./hooks/auth.hook";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "./routes";

function App() {
  const { authMe, signOut, token, userId, isReady } = useAuth();
  const isLogin = !!token;
  const routes = useRoutes(isLogin);

  return (
    <AuthContext.Provider
      value={{ authMe, signOut, token, userId, isReady, isLogin }}
    >
      <div className="app">
        <BrowserRouter>
          <Navbar />
          {routes}
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
