import { useParams, useNavigate } from "react-router";
import { teachersMockData } from "../constants/mockdata";
import { FaArrowLeft } from "react-icons/fa";
import { InfoCard } from "../components/InfoCard";

export default function TeacherDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const teacher = teachersMockData.find((t) => t.employeeId === id);

  if (!teacher) {
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
      title={teacher.name}
      subtitle="Faculty"
      image="https://images.unsplash.com/photo-1742201473145-28d80d0e6974?auto=format&fit=crop&w=600&q=80"
      badge={`Roll No: ${teacher.employeeId}`}
      fields={[
        { label: "Subject", value: teacher.subject },
        { label: "Experience", value: teacher.experience },
        { label: "contact", value: teacher.contact },
      ]}
      onBack={() => navigate("/students")}
    />
  );
}
