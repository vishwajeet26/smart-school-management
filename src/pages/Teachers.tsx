import { useNavigate } from "react-router";
import { GenericTable } from "../components/GenericTable";
import { teachersMockData } from "../constants/mockdata";

export default function Teachers() {
  
const navigate = useNavigate();
  const columns = [
    { header: "Teacher Name", accessor: "name" },
    { header: "Employee ID", accessor: "employeeId" },
    { header: "Subject", accessor: "subject" },
    { header: "Experience", accessor: "experience" },
    { header: "Contact Number", accessor: "contact" },
  ];

  return (
    <GenericTable
      title="Teachers List"
      columns={columns}
      data={teachersMockData}
      onRowClick={(teacher) => navigate(`/teachers/${teacher.employeeId}`)}
    />
  );
}
