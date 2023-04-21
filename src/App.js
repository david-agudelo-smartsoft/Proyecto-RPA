import { Routes, Route } from "react-router-dom";
import { Agents, Task, Bots, Clients, NotFoundPage, Login, Register } from './pages'
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/authContext";
import { MainProvider } from "./context/mainContext";
import { TaskProvider } from "./context/mainContextTask";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <AuthProvider>
      <MainProvider>
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
      </MainProvider>
    </AuthProvider>
  );
}

export default App;
