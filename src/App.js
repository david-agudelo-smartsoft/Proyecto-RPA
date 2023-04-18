import { Routes, Route } from "react-router-dom";
import { Agents, Task, Bots, Clients, NotFoundPage, Login, Register } from './pages'
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";

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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
