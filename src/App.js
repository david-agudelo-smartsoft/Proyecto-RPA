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
import { TaskProvider } from "./context/mainContextTask";

function App() {
  return (
    <AuthProvider>
      <MainProvider>
        <MainProviderAgent>
          <MainProviderBot>
            <TaskProvider>
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
            </TaskProvider>
          </MainProviderBot>
        </MainProviderAgent>
      </MainProvider>
    </AuthProvider>
  );
}

export default App;
