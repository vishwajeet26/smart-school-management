import { Routes, Route } from "react-router";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import AdminLayout from "./layouts/AdminLayout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
