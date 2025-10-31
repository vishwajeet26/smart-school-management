import { useNavigate } from "react-router";
import { GenericTable } from "../components/GenericTable";
import { studentMockData } from "../constants/mockdata";

export default function Students() {
const navigate = useNavigate();


   const columns = [
    { header: "Student Name", accessor: "name" },
    { header: "Roll Number", accessor: "rollNumber" },
    { header: "Grade", accessor: "grade" },
    { header: "Contact Number", accessor: "contact" },
  ];

  return (
    <GenericTable
      title="Students List"
      columns={columns}
      data={studentMockData}
      onRowClick={(student) => navigate(`/students/${student.rollNumber}`)}
    />
  );
}

