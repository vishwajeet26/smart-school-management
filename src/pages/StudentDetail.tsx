import { useParams, useNavigate } from "react-router";
import { studentMockData } from "../constants/mockdata";
import { FaArrowLeft } from "react-icons/fa";
import { InfoCard } from "../components/InfoCard";

export default function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = studentMockData.find((s) => s.rollNumber === id);

  if (!student) {
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
        title={student.name}
        subtitle="Student"
        image="https://images.unsplash.com/photo-1742201473145-28d80d0e6974?auto=format&fit=crop&w=600&q=80"
        badge={`Roll No: ${student.rollNumber}`}
        fields={[
          { label: "Grade", value: student.grade },
          { label: "Contact", value: student.contact },
          { label: "Email", value: student.email },
          { label: "Address", value: student.address },
          { label: "Attendance", value: student.attendance },
          { label: "Performance", value: student.performance },
        ]}
        onBack={() => navigate("/students")}
      />
  );
}
