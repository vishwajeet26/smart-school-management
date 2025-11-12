import { Routes, Route } from "react-router";
// pages
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";
import Teachers from "./pages/Teachers";
import Report from "./pages/Report";
import MainLayout from "./layouts/MainLayout";
import StudentDetail from "./pages/StudentDetail";
import TeacherDetail from "./pages/TearcherDetail";
import ReportDetail from "./pages/ReportDetail";
//layouts

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="students" element={<Students />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="reports" element={<Report />} />
            <Route path="*" element={<NotFound />} />
            {/* detail routes */}
            <Route path="/students/:id" element={<StudentDetail />} />
            <Route path="/teachers/:id" element={<TeacherDetail />} />
            <Route path="/reports/:id" element={<ReportDetail />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
