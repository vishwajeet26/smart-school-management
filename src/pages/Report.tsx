import { GenericTable } from "../components/GenericTable";


export default function Reports() {
  const reportData = [
    {
      reportId: "R101",
      title: "Monthly Attendance Report",
      createdOn: "2025-09-30",
      createdBy: "Rajesh Kumar",
      status: "Completed",
    },
    {
      reportId: "R102",
      title: "Student Performance Analysis",
      createdOn: "2025-09-28",
      createdBy: "Priya Sharma",
      status: "In Progress",
    },
    {
      reportId: "R103",
      title: "Teacher Feedback Summary",
      createdOn: "2025-09-25",
      createdBy: "Admin",
      status: "Completed",
    },
    {
      reportId: "R104",
      title: "Exam Results Overview",
      createdOn: "2025-09-20",
      createdBy: "Ravi Singh",
      status: "Completed",
    },
    {
      reportId: "R105",
      title: "Library Usage Report",
      createdOn: "2025-09-18",
      createdBy: "Neha Patel",
      status: "Pending Review",
    },
    {
      reportId: "R106",
      title: "Parent Feedback Analysis",
      createdOn: "2025-09-15",
      createdBy: "Amit Verma",
      status: "In Progress",
    },
    {
      reportId: "R107",
      title: "Annual Academic Summary",
      createdOn: "2025-09-10",
      createdBy: "Principal",
      status: "Completed",
    },
    {
      reportId: "R108",
      title: "Discipline Records",
      createdOn: "2025-09-08",
      createdBy: "Admin",
      status: "Pending Review",
    },
  ];

  const columns = [
    { header: "Report ID", accessor: "reportId" },
    { header: "Title", accessor: "title" },
    { header: "Created On", accessor: "createdOn" },
    { header: "Created By", accessor: "createdBy" },
    { header: "Status", accessor: "status" },
  ];

  return (
    <GenericTable
      title="Reports Summary"
      columns={columns}
      data={reportData}
    />
  );
}
