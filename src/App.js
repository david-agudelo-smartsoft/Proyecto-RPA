import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Task from "./pages/Task";
import Bots from "./pages/Bots";
import Agents from "./pages/Agents";
import Clients from "./pages/Clients";
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
              <Task />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/Task" element={<Task />} />
        <Route path="/Bots" element={<Bots />} />
        <Route path="/Agents" element={<Agents />} />
        <Route path="/Clients" element={<Clients />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
