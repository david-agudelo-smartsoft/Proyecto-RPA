import { Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import Home from "./components/navbar/Home";
import Bots from "./components/pages/Bots";
import Agents from "./components/pages/Agents";
import Clients from "./components/pages/Clients";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/navbar/Home" element={<Home />} />

        <Route path="/pages/Bots" element={<Bots />} />
        <Route path="/pages/Agents" element={<Agents />} />
        <Route path="/pages/Clients" element={<Clients />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
