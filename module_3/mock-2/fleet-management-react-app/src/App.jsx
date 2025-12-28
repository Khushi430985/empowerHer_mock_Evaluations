import { Routes, Route, Router } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from"./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App(){
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute> } />
    </Routes>
  );
}

export default App;