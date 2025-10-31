import { Card, Badge } from "flowbite-react";
import { useParams, Link } from "react-router";
import { FaArrowLeft, FaUserGraduate } from "react-icons/fa";
import { studentMockData } from "../constants/mockdata";

export default function StudentDetail() {
  const { id } = useParams();

  const student = studentMockData.find((s) => s.rollNumber === id);

  if (!student) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl font-semibold text-gray-600">
          Student not found
        </p>
        <Link to='/students' className="mt-4">
          <FaArrowLeft className="mr-2" /> Back
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-10 bg-amber-700 ">
      <Card
        className="w-full max-w-sm shadow-lg "
      >
        <img
          src="https://images.unsplash.com/photo-1742201473145-28d80d0e6974?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3464"
          alt="Student profile"
          className="w-32 h-32 rounded-full object-cover mx-auto mt-6" // ⬅ smaller, rounded image
        />
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <FaUserGraduate /> {student.name}
          </h2>
          <Badge color="info" className="text-sm px-3 py-1">
            Roll No: {student.rollNumber}
          </Badge>
        </div>

        <div className="space-y-3 text-white">
          <p>
            <strong>Grade:</strong> {student.grade}
          </p>
          <p>
            <strong>Contact:</strong> {student.contact}
          </p>
          <p>
            <strong>Email:</strong> {student.email}
          </p>
          <p>
            <strong>Address:</strong> {student.address}
          </p>
          <p>
            <strong>Attendance:</strong> {student.attendance}
          </p>
          <p>
            <strong>Performance:</strong> {student.performance}
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <Link to={"/students"} className="text-white">
            <FaArrowLeft className="mr-2" /> Back
          </Link>
        </div>
      </Card>
    </div>
  );
}
