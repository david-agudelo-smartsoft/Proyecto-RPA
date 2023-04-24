import { Routes, Route } from "react-router-dom";
import {
  Agents,
  Task,
  Bots,
  Clients,
  NotFoundPage,
  Login,
  Register,
} from "./pages";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
import { MainProvider } from "./context/mainContext";
import { MainProviderAgent } from "./context/mainContextAgents";
import { MainProviderBot } from "./context/mainContextBots";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <AuthProvider>
      <MainProvider>
        <MainProviderAgent>
        <MainProviderBot>
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
          <Toaster />
        </MainProviderBot>
        </MainProviderAgent>
      </MainProvider>
    </AuthProvider>
  );
}

export default App;
