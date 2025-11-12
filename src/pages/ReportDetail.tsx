import { useParams, useNavigate } from "react-router";
import { reportMockData } from "../constants/mockdata";
import { FaArrowLeft } from "react-icons/fa";
import { InfoCard } from "../components/InfoCard";

export default function ReportDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const report = reportMockData.find((r) => r.reportId === id);

  if (!report) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl font-semibold text-gray-600">
          Student not found
        </p>
        <button
          onClick={() => navigate("/students")}
          className="mt-4 flex items-center text-blue-500 hover:underline"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>
      </div>
    );
  }

  return (
    <InfoCard
      title={report.title}
      subtitle="reports"
      image="https://images.unsplash.com/photo-1742201473145-28d80d0e6974?auto=format&fit=crop&w=600&q=80"
      fields={[
        { label: "Status", value: report.status },
        { label: "Created On", value: report.createdOn },
        { label: "Created By", value: report.createdBy },
      ]}
      onBack={() => navigate("/reports")}
    />
  );
}
